// These two lines of code are used in a Node.js application to load environment variables from a file into your application’s runtime.

const dotenv = require("dotenv");
dotenv.config()

// used to import modules  in Node.js.

const express = require("express"); // Imports the Express.js framework, which is used for building web applications and APIs.
const app = express(); // Creates an instance of an Express application.
const port = process.env.PORT || 8000; // Defines the port number that the server will listen on. [This dynamically assigns the port based on the environment.]
const bodyParser = require('body-parser'); // Imports body-parser, a middleware that helps process incoming request bodies (like JSON or URL-encoded data).
const cors = require("cors"); // Imports CORS (Cross-Origin Resource Sharing) middleware to handle cross-origin requests.
const connectdb = require("./db/connection.js"); // Imports a local module (connection.js) from the db directory, likely for database connection setup.
const mongoose = require('mongoose');
const path = require('path');


// path for the import/call routes in app.js 

const userrouter = require("./routes/userRouter.js");
const categoryrouter = require("./routes/categoryRouter.js")
const productrouter = require("./routes/productRouter.js")
const variantrouter = require("./routes/variantRouter.js")
const wishlistrouter = require("./routes/wishlistRouter.js")
const cartrouter = require("./routes/cartRouter.js")
const orderrouter = require("./routes/orderRouter.js")
const addressrouter = require("./routes/addressRouter.js")
const inforouter = require("./routes/infoRouter.js");
const brandrouter = require("./routes/brandRouter.js")
const carousellistrouter = require("./routes/carousellistRouter.js")
const bannerrouter = require("./routes/bannerRouter.js")
const attributerouter = require("./routes/attributeRouter.js")




//  Database connection route

const database = process.env.database || "mongodb+srv://chiragsingh8926:edkPPeCNMN25t667@shoporiastore.lvefl.mongodb.net/?retryWrites=true&w=majority&appName=ShoporiaStore";
mongoose.set('strictQuery', false); // This line is used in Mongoose, a MongoDB Object Data Modeling (ODM) library for Node.js. [It controls how Mongoose handles query filters that contain fields not in the schema.] [By setting strictQuery: false, Mongoose ignores unknown fields in query filters instead of throwing an error.]
connectdb(database);

// These two lines configure middleware in an Express.js application. 

app.use(express.static(path.join(__dirname, 'public'))); // [Serves static files (e.g., HTML, CSS, JS, images) from the public folder.] [express.static() is a built-in middleware that allows serving static assets.] [path.join(__dirname, 'public') constructs an absolute path to the public directory.]
app.use(bodyParser.urlencoded({ extended: false })); // [Parses URL-encoded form data (e.g., from an HTML <form>).] [extended: false means it only supports simple objects (not nested structures).]

// Models import/call routes in app.js

require("./Models/contactus");
require("./Models/category");
require("./Models/attribute");
require("./Models/product");
require("./Models/product_variant");
require("./Models/usertable");
require("./Models/cart");
require("./Models/brand");
require("./Models/address");
require("./Models/order");
require("./Models/product_variant");
require("./Models/wishlist");
require("./Models/banner");



// defined routes over here [Parse JSON bodies] | ## controllers import/call routes in app.js
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", userrouter);
app.use("/api/category", categoryrouter);
app.use("/api/product",productrouter);
app.use("/api/variant", variantrouter);
app.use("/api/wishlist", wishlistrouter);
app.use("/api/cart", cartrouter);
app.use("/api/order",orderrouter);
app.use("/api/address",addressrouter);
app.use("/api", inforouter);
app.use("/api/brand",brandrouter);
app.use("/api/list",carousellistrouter);
app.use("/api/attribute", attributerouter);
app.use("/api/banner", bannerrouter);

// If run locally, the console will print the following message.
app.listen(port, () => {console.log(`🚀🚀server is runing at http://localhost:${port}`);}); // This line is used in an Express.js application to start the server and listen for incoming requests.



// Below this in comments is the explanation of the code above.

/*
Controllers -> Models -> Middlewares -> Routes -> app.js
*/

/*
Example Without strictQuery: false
If your schema only has name and age:

javascript
Copy
Edit
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);
Now, if you run a query with an extra field (gender) that is not in the schema:

javascript
Copy
Edit
const result = await User.find({ name: "Alice", gender: "female" });
If strictQuery is true (default in Mongoose 7+), this will throw an error.

If strictQuery is false, it will simply ignore gender and execute the query with name.

When to Use It?
✅ Set strictQuery: false if you want flexibility (Mongoose will ignore unknown query fields).

✅ Set strictQuery: true for strict validation (prevents mistakes by rejecting unknown fields).
*/