const UserModel = require("./User/UserSchema");
const PlaceModel = require("./Place/PlaceSchema");
const ReviewModel = require("./Place/ReviewSchema");

module.exports = {
  User: UserModel,
  Place: PlaceModel,
  Review: ReviewModel,
};
