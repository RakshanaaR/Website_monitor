const mongoose = require('mongoose')
// const shortId = require('shortid')

const PingSchema = new mongoose.Schema({
  Site: {
    type: String,
    required: true
  },
//   short: {
//     type: String,
//     required: true,
//     default: shortId.generate
//   },
//   clicks: {
//     type: Number,
//     required: true,
//     default: 0
//   }
})

module.exports = mongoose.model('ping', PingSchema)