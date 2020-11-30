const fs = require("fs")

const season1 = require("../src/data/msl/msl-schedule/1")
const season2 = require("../src/data/msl/msl-schedule/2")
const season3 = require("../src/data/msl/msl-schedule/3")

function generateFile(data) {
  data.items.forEach((item, index) => {
    const position = index + 1
    fs.writeFileSync(
      `../src/data/msl-schedules/${data.season}_${position}.json`,
      JSON.stringify(item)
    )
  })
}

generateFile(season3)
