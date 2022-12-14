const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    description: { type: String },
    rating: { type: Number }, //stars
    dateInIso: { type: String },
    reviewPics: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const ReviewModel = mongoose.model("ReviewModel", ReviewSchema);
module.exports = ReviewModel;
