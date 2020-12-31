/**
 * Generic
 * @returns {function(*, *): *}
 */
function predicate() {
  var fields = [],
    n_fields = arguments.length,
    field,
    name,
    reverse,
    cmp

  var default_cmp = function (a, b) {
      if (a === b) return 0
      return a < b ? -1 : 1
    },
    getCmpFunc = function (primer, reverse) {
      var dfc = default_cmp,
        // closer in scope
        cmp = default_cmp
      if (primer) {
        cmp = function (a, b) {
          return dfc(primer(a), primer(b))
        }
      }
      if (reverse) {
        return function (a, b) {
          return -1 * cmp(a, b)
        }
      }
      return cmp
    }

  // preprocess sorting options
  for (var i = 0; i < n_fields; i++) {
    field = arguments[i]
    if (typeof field === "string") {
      name = field
      cmp = default_cmp
    } else {
      name = field.name
      cmp = getCmpFunc(field.primer, field.reverse)
    }
    fields.push({
      name: name,
      cmp: cmp,
    })
  }

  // final comparison function
  return function (A, B) {
    var a, b, name, result
    for (var i = 0; i < n_fields; i++) {
      result = 0
      field = fields[i]
      name = field.name

      result = field.cmp(A[name], B[name])
      if (result !== 0) break
    }
    return result
  }
}

exports.predicate = predicate

/**
 * Another json arryy sort, less performant than predicate
 * @param sortBy
 * @returns {function(*, *): number}
 */
function propComparator(sortBy) {
  return function (a, b) {
    let i = 0,
      result = 0
    while (i < sortBy.length && result === 0) {
      result =
        sortBy[i].direction *
        (a[sortBy[i].name].toString() < b[sortBy[i].name].toString()
          ? -1
          : a[sortBy[i].name].toString() > b[sortBy[i].name].toString()
          ? 1
          : 0)
      i++
    }
    return result
  }
}
exports.propComparator = propComparator

/**
 * Generic
 * @param itemArr
 * @param prop
 * @returns {number}
 */
function getTotalChildArr(itemArr, prop) {
  let sum = 0
  itemArr.map(item => {
    sum += item[prop].length
  })
  return sum
}

exports.getTotalChildArr = getTotalChildArr

/**
 * Generic
 * @param xs
 * @param key
 * @returns {*}
 */
const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
exports.groupBy = groupBy

/**
 * Generic
 * @param data
 * @param key
 * @returns {*}
 */
function getSum(data, key) {
  return data.reduce(function (sum, item) {
    return sum + item[key]
  }, 0)
}
exports.getSum = getSum

function getDefaultScore() {
  var defaultScore = {
    played: 0,
    won: 0,
    lost: 0,
    draw: 0,
    goal_allowed: 0,
    goal_scored: 0,
  }

  return defaultScore
}
exports.getDefaultScore = getDefaultScore

function jsonArrayColumnSum(jsonArr, propArr) {
  return jsonArr.reduce(
    (sums, obj) =>
      Object.keys(obj).reduce((s, k) => {
        k === "id" || (s[k] = (s[k] || 0) + +obj[k])
        return s
      }, sums),
    {}
  )
}

exports.jsonArrayColumnSum = jsonArrayColumnSum
