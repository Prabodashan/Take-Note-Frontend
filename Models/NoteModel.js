const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    title: {
      type: String,
      required: [true, "Please add a title value"],
    },
    color: {
      type: String,
      required: [true, "Please add a color value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
