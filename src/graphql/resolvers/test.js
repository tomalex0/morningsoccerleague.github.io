module.exports = {
  Query: {
    allTestJsons: {
      args: {
        typeName: "Int",
      },
      type: ["TestJson"],
      resolve(source, args, context, info) {
        const typeNameVal = args.typeName
        let data = context.nodeModel.getAllNodes({ type: "TestJson" })
        const response = typeNameVal
          ? data.filter(item => item.typeName == typeNameVal)
          : data
        return response
      },
    },
  },
}
