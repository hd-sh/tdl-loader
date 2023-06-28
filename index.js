module.exports = function tdlLoader(source) {
  const logger = this.query.logger || false
  source = source.replace(/\s+/g, '')
  var rx = /<template[^>]*>([\s\S]+?)<\/template>/i
  var data = rx.exec(source)
  if (data) {
    data = data[1]
  }
  if (logger) {
    console.log('source:', source + '\n' + 'data:', data)
  }
  return `module.exports = ${JSON.stringify(compilerData(source, eval(data)))}`
}
function compilerData(source, data) {
  return source.replace(/\{\{(.*?)\}\}/g, function (match, key) {
    return data[key]
  })
}
