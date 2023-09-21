const mongoose = require("mongoose");

const scholarshipModel = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    unique : [true, "Scholarship Name already exists"],
  },
  deadline: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  documents: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
//   timestamp: {
//     type: Date,
//     default: Date.now
//   },
// });

// SLC ra +2 
// 


const Scholarships = mongoose.model("scholarships", scholarshipModel);

module.exports = Scholarships;
