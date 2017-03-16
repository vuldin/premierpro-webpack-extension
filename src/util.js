let _ = require('lodash')

const viewportToPixel = val => {
  let percent = val.match(/[\d.]+/)[0] / 100
  let unit = val.match(/[vwh]+/)[0]
  return (unit == 'vh' ? window.innerHeight : window.innerWidth) * percent
}

const mergecat = (target, source) => { // merge objects, concat arrays. based on https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
  // iIterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      if(source[key] instanceof Array) Object.assign(source[key],source[key].concat(target[key]))
      else Object.assign(source[key], mergecat(target[key], source[key]))
    }
  }
  Object.assign(target || {}, source) // join `target` and modified `source`
  return target
}
module.exports = {
  viewportToPixel: viewportToPixel,
  mergecat: mergecat
}
