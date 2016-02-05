'use strict'
var glob

if (typeof window !== 'undefined') {
  glob = window
} else {
  glob = global
}

module.exports = function (mgSchema) {
  if (!mgSchema) {
    mgSchema = {
      Types: {
        Mixed: 'Mixed',
        ObjectId: 'ObjectId'
      }
    }
  }
  function stringify (schema) {
    return JSON.stringify(schema, function (key, value) {
      if (value instanceof RegExp) {
        return ('__REGEXP ' + value.toString())
      } else if (typeof value === 'function') {
        if (key === 'validator') {
          return value.toString()
        }
        return value.name
      }
      return value
    })
  }

  function parse (json) {
    return JSON.parse(json, function (key, value) {
      if (glob.hasOwnProperty(value)) {
        return glob[value]
      } else if (value === 'Mixed') {
        return mgSchema.Types.Mixed
      } else if (value === 'ObjectId') {
        return mgSchema.Types.ObjectId
      } else if (key === 'validator') {
        return (new Function('return( ' + value + ' );'))()
      } if (value && value.toString && value.toString().indexOf('__REGEXP ') === 0) {
        var m = value.split('__REGEXP ')[1].match(/\/(.*)\/(.*)?/)
        return new RegExp(m[1], m[2] || '')
      }
      return value
    })
  }

  return {
    stringify: stringify,
    parse: parse
  }
}
