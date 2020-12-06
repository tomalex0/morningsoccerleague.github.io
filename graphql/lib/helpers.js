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
