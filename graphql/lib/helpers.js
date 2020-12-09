/**
 * Generic Function to get file info based on relative path
 * @param context
 * @param path
 * @returns {*}
 */
exports.getFile = (context, path) => {
  const data = context.nodeModel.getAllNodes({ type: `File` })
  const record = data.find(item => item.relativePath == path)
  return record
}

// findInNested(12, [], 'players')
// [{
//  	"players": [1, 2, 3]
//  }, {
//  	"players": [12, 13]
//  }]
exports.findInNested = (searchData, arr, parentProp, accum = [], parentArr) => {
  arr.forEach(f => {
    if (f[parentProp]) {
      findInNested(searchData, f[parentProp], parentProp, accum, f)
    }
    if (f == searchData) {
      accum.push(parentArr)
    }
  })
  return accum
}
