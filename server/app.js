// 

const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require("cors");
const connectdb = require("./db/connection.js");

// path for the defined routes 

const userrouter = require("./routes/userRouter.js");
const categoryrouter = require("./routes/categoryRouter.js")
const productrouter = require("./routes/productRouter.js")


//  Database connection route

const database = "mongodb+srv://chiragsingh8926:edkPPeCNMN25t667@shoporiastore.lvefl.mongodb.net/?retryWrites=true&w=majority&appName=ShoporiaStore";


// 

require("./Models/contactus");
require("./Models/category");
require("./Models/attribute");
require("./Models/product");
require("./Models/product_variant");
require("./Models/usertable");
require("./Models/wishlist");
require("./Models/brand");
require("./Models/address");
require("./Models/order");

// defined routes over here [Parse JSON bodies] | ## controllers
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", userrouter);
app.use("/api/category", categoryrouter);
app.use("/api/product",productrouter);

connectdb(database)
app.listen(port, () => {console.log(`server is runing at ${port}`);});