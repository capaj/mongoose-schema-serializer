'use strict'
const mss = require('../index')
const expect = require('chai').expect

describe('serialization', function () {
  describe('should be able to serialize and deserialize all mongoose types', function () {
    it.skip('string', function () {
      const schema = {
        string: String
      }
      const json = mss.stringify(schema)
      expect(json).to.equal('{"string":"String"}')
      expect(mss.parse(json)).to.eql(schema)

    })
    it('number', function () {
      const schema = mss.stringify({
        num: Number
      })
      const json = mss.stringify(schema)
      expect(json).to.equal('{"num":"Number"}')
      expect(mss.parse(json)).to.eql(schema)
    })
    it('date', function () {

    })
    it('buffer', function () {

    })
    it('boolean', function () {

    })
    it('mixed', function () {

    })
    it('objectId', function () {

    })
  })
})
