require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const post = require("./routes/post");

app.use(express.json());
app.use(cors());

app.use("/api/news", post);

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`listening to port : ${port}`);
});
