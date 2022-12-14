const express = require("express");
const router = express.Router();
const databaseConnect = require("./config/databaseConnet");

const port = process.env.PORT || 5000;

require("dotenv").config();

const userRouter = require("./routes/users/user");

const app = express();

app.use(express.urlencoded({ extended: true }));
router.use(express.urlencoded({ extended: true }));
app.use(express.json());

databaseConnect();

app.use("/", router);
app.use("/api/user", userRouter);

app.listen(port, () => console.log(`Running on port no ${port}`));
