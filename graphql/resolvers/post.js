module.exports = {
  DemoTagsJson: {
    posts: {
      type: ["DemoPostJson"],
      resolve(source, args, context, info) {
        return context.nodeModel.runQuery({
          query: {
            filter: {
              tags: {
                elemMatch: {
                  tagname: {
                    eq: source.tagname,
                  },
                },
              },
            },
          },
          type: "DemoPostJson",
          firstOnly: false,
        })
      },
    },
  },
}
