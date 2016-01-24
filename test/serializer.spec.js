/* eslint-env node, mocha */
'use strict'
const expect = require('chai').expect
var mongoose = require('mongoose')
var Schema = mongoose.Schema
const mss = require('../index')(Schema)

describe('serialization', function () {
  describe('should be able to serialize and deserialize all mongoose types', function () {
    it('string', function () {
      const schema = {
        string: String
      }
      const json = mss.stringify(schema)
      expect(json).to.equal('{"string":"String"}')
      expect(mss.parse(json)).to.eql(schema)
    })
    it('number', function () {
      const schema = {
        num: Number
      }
      const json = mss.stringify(schema)
      expect(json).to.equal('{"num":"Number"}')
      expect(mss.parse(json)).to.eql(schema)
    })
    it('date', function () {
      const schema = {
        num: Date
      }
      const json = mss.stringify(schema)
      expect(json).to.equal('{"num":"Date"}')
      expect(mss.parse(json)).to.eql(schema)
    })
    it('buffer', function () {
      const schema = {
        num: Buffer
      }
      const json = mss.stringify(schema)
      expect(json).to.equal('{"num":"Buffer"}')
      expect(mss.parse(json)).to.eql(schema)
    })
    it('boolean', function () {
      const schema = {
        num: Boolean
      }
      const json = mss.stringify(schema)
      expect(json).to.equal('{"num":"Boolean"}')
      expect(mss.parse(json)).to.eql(schema)
    })
    it('mixed', function () {
      const schema = {
        mixed: Schema.Types.Mixed
      }
      const json = mss.stringify(schema)
      expect(json).to.equal('{"mixed":"Mixed"}')
      expect(mss.parse(json)).to.eql(schema)
    })
    it('objectId', function () {
      const schema = {
        id: Schema.Types.ObjectId
      }
      const json = mss.stringify(schema)
      expect(json).to.equal('{"id":"ObjectId"}')
      expect(mss.parse(json)).to.eql(schema)
    })
  })
})
