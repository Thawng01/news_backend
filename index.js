require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const post = require("./routes/post");
const error = require("./middleware/error");

app.use(express.json());
app.use(cors());
app.use("/api/news", post);
app.use(error);

const port = process.env.PORT || 9000;

app.listen(port);
