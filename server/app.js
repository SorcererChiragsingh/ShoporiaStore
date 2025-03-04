const userrouter = require("./routes/userRouter.js");
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require("cors");
const connectdb = require("./db/connection.js");
const database = "mongodb+srv://chiragsingh8926:edkPPeCNMN25t667@shoporiastore.lvefl.mongodb.net/?retryWrites=true&w=majority&appName=ShoporiaStore";




// Parse JSON bodies
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
require ("./Models/usertable.js")
app.use("/api/user", userrouter);

connectdb(database)
app.listen(port, () => {
    console.log(`server is runing at ${port}`);
  });