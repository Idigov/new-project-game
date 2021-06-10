const {Schema, model} = require('mongoose')

const schema = new Schema ({
  title:{
    type: String
  },
  createAt:{
    type: Date,
    default: Date.now
  },
  updatedAt:{
    type:Date,
    default: Date.now
  }
})
const genres = model('genre', schema)
module.exports = genres