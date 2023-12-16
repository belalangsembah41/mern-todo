const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", schema);
