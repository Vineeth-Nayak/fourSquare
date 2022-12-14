const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    profilePic: {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        //required: true,
      },
    },

    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    refreshToken: { type: String },
    emailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;
