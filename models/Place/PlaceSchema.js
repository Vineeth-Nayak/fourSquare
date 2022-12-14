const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
  {
    placePic: [
      {
        public_id: {
          type: String,
          // required: true,
        },
        url: {
          type: String,
          //required: true,
        },
      },
    ],
    name: { type: String },
    type: { type: String },
    address: { type: String },
    description: { type: String },
    overrallRating: { type: Number, default: 0 }, // either calculate after each review or api call while submiting rating
    pricing: { type: Number, default: 4 },
    // features
    acceptingCreditCards: { type: Boolean, default: false },
    delivery: { type: Boolean, default: false },
    dogFriendly: { type: Boolean, default: false },
    familyFriendly: { type: Boolean, default: false },
    outdoorSeating: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const PlaceModel = mongoose.model("PlaceModel", PlaceSchema);
module.exports = PlaceModel;
