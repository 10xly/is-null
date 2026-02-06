const isUndefined = require("@is-(unknown)/is-undefined")
const isNil = require("@is-(unknown)/is-nil")
const trueValue = require("true-value")
const falseValue = require("false-value")

module.exports = function isNull(value) {
  return isNil(value)?
         isUndefined(value)?
         falseValue():trueValue():falseValue()
}