const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    petId: {
      type: String,
    },
    petName: {
      type: String,
      required: [true, "Pet name is required"],
    },
    breed: {
      type: String,
      required: [true, "breed is required"],
    },
    age: {
      type: String,
      required: [true, "Age is required"],
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
    },
    color: {
      type: String,
    },
    coat: {
      type: String,
    },
  },
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
