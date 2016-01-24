'use strict'
const types = {}

let glob
if (typeof window !== 'undefined') {
  glob = window
} else {
  glob = global
}

module.exports = function (mgSchema) {
  if (!mgSchema) {
    mgSchema = {
      types: {
        Mixed: 'Mixed',
        ObjectId: 'ObjectId'
      }
    }
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
      } else if (value === 'Mixed') {
        return mgSchema.Types.Mixed
      } else if (value === 'ObjectId') {
        return mgSchema.Types.ObjectId
      }
      return value
    })
  }

  return {
    stringify,
    parse
  }
}
