const express = require("express");
const app = express();
const port = 3000; // set the port 3000

app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});

const bodyParser = require("body-parser"); // parse incoming requests in various formats,including JSON
app.use(bodyParser.json()); //Specifies that JSON request should be parsed
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose"); //Provides an interface for interacting with MongoDB
require("dotenv").config(); //Loads environment variables from a .env file

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");

const cors = require('cors')
app.use(cors({
  origin: '*'
  // origin: ['http://www.section.io', 'https://www.google.com']
}))

app.use('/',express.static('files'))

mongoose.set("strictQuery", false); //allows MongoDB to use queries that are not defined to the schema
mongoose.connect(
  //Connect to MongoDB
  process.env.MONGODB_URI, //Connect in the environment variable MONGODB_URI, using the connect method provided by Mongoose
  { useNewUrlParser: true, useUnifiedTopology: true }, //useNewUrlParser option tells the MongoDB driver to use the new URL parser, useUnifiedTopology option tells it to use the new server discovery and monitoring engine
  (err) => {
    //Callback function in an error case
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
const userProduct = require("./routes/user.product.routes");
app.use("/api/userproducts", userProduct);

const user = require("./routes/user.routes");
app.use("/api/user", user); //set a handler for requests to this path

const product = require("./routes/product.routes");
app.use("/api/product", product);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument.options));
