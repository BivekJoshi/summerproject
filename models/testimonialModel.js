const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    experience: {
      type: String,
      required: [true, "Experience is required"],
    },
  },
  { timestamps: true }
);

const testimonialModel = mongoose.model("testimonial", testimonialSchema);
module.exports = testimonialModel;
