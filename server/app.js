const userrouter = require("./routes/userRouter.js");
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require("cors");





// Parse JSON bodies
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", userrouter);


app.listen(port, () => {
    console.log(`server is runing at ${port}`);
  });