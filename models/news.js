var mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  title:  {type: String, required: [true, 'Tytuł musi być wypełniony']}, // String is shorthand for {type: String}
  description: {type: String, required: [true, 'Opis jest wymagany']},
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('News', newsSchema)