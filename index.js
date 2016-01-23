'use strict'
const types = {}

let glob
if (typeof window !== 'undefined') {
  glob = window
} else {
  glob = global
}

function stringify (schema) {
  return JSON.stringify(schema, (key, value) => {
    if (typeof value === 'function') {
      return value.name
    }
    return value
  })
}

function parse (json) {
  return JSON.parse(json, (key, value) => {
    if (glob.hasOwnProperty(value)) {
      return glob[value]
    }
    return value
  })
}

module.exports = {
  stringify,
  parse
}
