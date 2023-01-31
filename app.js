const express = require("express");
// const path = require("path"); //for live emails.
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");
require("express-async-errors");
require("dotenv").config();
require("./db");
const cors = require("cors");

const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");
const reviewRouter = require("./routes/review");
const adminRouter = require("./routes/admin");
const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "public"))); // for live emails.
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);
app.use("/api/review", reviewRouter);
app.use("/api/admin", adminRouter);

app.use("/*", handleNotFound);

app.use(errorHandler);

// const PORT = process.env.PORT || 8000;  //live emails

// app.listen(PORT, () => {
//   console.log("the port is listeing on port " + PORT);
// });

app.listen(8000, () => {
  console.log("the port is listening on port 8000");
});
