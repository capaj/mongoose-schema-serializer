# mongoose-schema-serializer
serialize and deserialize your mongoose schema with this simple JSON stringifier/reviver

Useful, when you need to send your schema over the network-for example to your admin frontend.

## Install

```
npm i mongoose-schema-serializer
```

## Usage
```javascript
var Schema = mongoose.Schema  //on the frontend you can provide an object with same structure to satisfy it
const mss = require('../index')(Schema)
const json = mss.stringify(schema)
// then on frontend
const schema = mss.parse(json)
```
