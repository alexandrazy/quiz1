const express = require('express');
const morgan = require('morgan');
const bodyParser= require('body-parser');
const app = express() ;
const path = require('path');
const cookieParser = require("cookie-parser");


app.set('view engine', 'ejs') 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

//Use to join static assets 
console.log("__dirname in ./index.js:", __dirname); app.use(express.static(path.join(__dirname, "public"))); 


app.use((request, response, next) => {
const username = request.cookies.username;
response.locals.username = "";
if (username) {
  response.locals.username = username;
  console.log(` Signed in as CHICKN ${username}`);
}
next();
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 5;
app.post("/sign_in", (request, response) => {
  const username = request.body.username;

  // `response.cookie(<cookie-name>, <cookie-value>, <options>)`
  // The above method is added to the `response` object by the
  // cookie parser middleware. Use to send cookies to the browser.
  // - The first arg. is a string that's the name of the cookie
  // - The second arg. is a value for the cookie which can be
  //   an object or an array.
  // - (optional) The last, options for the cookie.

  response.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  // Like `response.send` and `response.render`, `response.redirect` ends
  // the response. It tells browser to make GET request to a specified
  // location forcing the user to go to a new URL.
  response.redirect("/");
});

app.post("/sign_out", (request, response /*, next */) => {
  response.clearCookie("username");
  response.redirect("/");
});

const clucksRouter = require("./routes/clucks");
app.use("/", clucksRouter);



const PORT = 5001;
app.listen(PORT, () => {
console.log(`server is running on port ${PORT}`)
})

