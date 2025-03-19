// used to import modules  in Node.js.

const express = require("express"); // Imports the Express.js framework, which is used for building web applications and APIs.
const app = express(); // Creates an instance of an Express application.
const port = 8000;
const bodyParser = require('body-parser'); // Imports body-parser, a middleware that helps process incoming request bodies (like JSON or URL-encoded data).
const cors = require("cors"); // Imports CORS (Cross-Origin Resource Sharing) middleware to handle cross-origin requests.
const connectdb = require("./db/connection.js"); // Imports a local module (connection.js) from the db directory, likely for database connection setup.


// path for the import/call routes in app.js 

const userrouter = require("./routes/userRouter.js");
const categoryrouter = require("./routes/categoryRouter.js")
const productrouter = require("./routes/productRouter.js")
const variantrouter = require("./routes/variantRouter.js")
const wishlistrouter = require("./routes/wishlistRouter.js")


//  Database connection route

const database = "mongodb+srv://chiragsingh8926:edkPPeCNMN25t667@shoporiastore.lvefl.mongodb.net/?retryWrites=true&w=majority&appName=ShoporiaStore";


// Models import/call routes in app.js

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
require("./Models/product_variant");
require("./Models/wishlist");



// defined routes over here [Parse JSON bodies] | ## controllers import/call routes in app.js
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", userrouter);
app.use("/api/category", categoryrouter);
app.use("/api/product",productrouter);
app.use("/api/variant", variantrouter);
app.use("/api/wishlist", wishlistrouter);


connectdb(database)
app.listen(port, () => {console.log(`server is runing at ${port}`);});




/*
Controllers -> Models -> Middlewares -> Routes -> app.js
*/