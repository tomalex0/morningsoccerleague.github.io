const fs = require("fs")
const path = require("path")

const PostTypeDefsPath = path.resolve(__dirname, "./queries/post.gql")
const MslTypeDefsPath = path.resolve(__dirname, "./queries/msl.gql")
const TestTypeDefsPath = path.resolve(__dirname, "./queries/test.gql")
// const MslSchema = require("./queries/msl")

const PostTypeDefs = fs.readFileSync(PostTypeDefsPath, {
  encoding: `utf-8`,
})

const MslTypeDefs = fs.readFileSync(MslTypeDefsPath, {
  encoding: `utf-8`,
})

const TestTypeDefs = fs.readFileSync(TestTypeDefsPath, {
  encoding: `utf-8`,
})

module.exports = ({ actions }) => {
  const { createTypes } = actions

  createTypes(PostTypeDefs)

  createTypes(MslTypeDefs)

  createTypes(TestTypeDefs)
}
