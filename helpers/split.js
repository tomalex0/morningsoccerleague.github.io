const fs = require("fs")

const season1 = require("../src/data/raw/schedule/1")
const season2 = require("../src/data/raw/schedule/2")
const season3 = require("../src/data/raw/schedule/3")

function generateFile(data) {
  data.items.forEach((item, index) => {
    const position = index + 1
    var seasonId =
      position < 10 ? `${data.season}`.padEnd(2, "0") : `${data.season}`
    item.schedule_id = parseInt(`${seasonId}${position}`)
    item.gamestats = [
      { ...item.stats.home, team_type: "home" },
      { ...item.stats.away, team_type: "away" },
    ]
    var d = new Date(item.scheduled_date)
    var ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d)
    var mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d)
    var da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d)
    item.scheduled_date = `${ye}-${mo}-${da}`
    delete item.stats
    fs.writeFileSync(
      `../src/data/msl/msl-schedules/${data.season}_${position}.json`,
      JSON.stringify(item)
    )
  })
}

generateFile(season1)
