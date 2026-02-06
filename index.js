const falseValue = require("false-value")
const isUndefined = require("@is-(unknown)/is-undefined")
const RequireObjectCoercible = require("es-object-atoms/RequireObjectCoercible")
const not = require("es-logical-not-operator")

module.exports = function isNull(value) {
  if (isUndefined(value)) return falseValue()
  try {
    RequireObjectCoercible(value)
    return falseValue()
  } catch {
    return not(value)
  }
}