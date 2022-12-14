const databaseConnect = () => {
  const mongoose = require("mongoose");
  //   const mongoDbURL = "mongodb://127.0.0.1/fourSquare";
  // const mongoDbURL = `mongodb+srv://Vineeth:${process.env.DB_PASSWORD}@heludilla.cj6bdno.mongodb.net/cricketDb`;

  mongoose
    .connect(process.env.DB_URL.toString())
    .catch((err) => console.log(err));
};

module.exports = databaseConnect;
