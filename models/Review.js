const {Schema,model} = require('mongoose')

const Review = new Schema({
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game"
  },
  text:{
    type: String
  },
  createdAt:{
    type: Date
  },
  updatedAt:{
    type: Date
  }
})

module.exports = model('Review', Review)