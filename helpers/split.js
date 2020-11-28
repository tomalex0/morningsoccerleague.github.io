const fs = require("fs")

const season1 = require("../src/data/schedule/1")
const season2 = require("../src/data/schedule/2")
const season3 = require("../src/data/schedule/3")

season3.items.forEach((item, index) => {
  const position = index + 1
  // fs.writeFileSync(`../src/data/schedules/${season3.season}_${position}.json`, JSON.stringify(item));
})
