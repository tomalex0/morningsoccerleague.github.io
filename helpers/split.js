const fs = require("fs")

const season1 = require("../src/data/raw/schedule/1")
const season2 = require("../src/data/raw/schedule/2")
const season3 = require("../src/data/raw/schedule/3")

function generateFile(data) {
  data.items.forEach((item, index) => {
    const position = index + 1
    item.schedule_id = `${data.season}_${position}`
    fs.writeFileSync(
      `../src/data/msl/msl-schedules/${data.season}_${position}.json`,
      JSON.stringify(item)
    )
  })
}

generateFile(season1)
