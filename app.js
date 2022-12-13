var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cors = require("cors");


var app = express();

//cors
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Read blogs.json and save it to the app.locals.blog variable. accessible throughout the views as blog
fs.readFile("./blogs.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    let blogs = JSON.parse(jsonString);
    app.locals.blog = blogs;
    //listURLs(blogs);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }

});

// ======================================================
//        URLs
// ======================================================
// function listURLs(blogs){
//   for(let i = 0; i< blogs.length; i++){
//     renderURLs('blogposts/', blogs[i].url);
//     //console.log('blogposts/' + blogs[i].url);
//   }
// }


function renderURLs(path, item, alias=item){
  // path is the path to the item
  // the item is the name of the file itself.
  // alias allows you to create different URL aliases.
  // alias defaults to item because most of the time they are the same.

  return app.get("/" + alias, function(req, res) {
    console.log(path + item);
    res.render(path + item);
  })
}


// index page
renderURLs('pages/', 'index', "");

// about page
renderURLs('pages/', 'about');

// resume page
renderURLs('pages/', 'resume');



// We need some automation here, in order to add these blog posts

// blog template
app.get('/blogtemplate', function(req, res) {
  res.render('blogposts/blogtemplate');
});

// Fake Blog Post
app.get('/fakeblogpost', function(req, res) {
  res.render('blogposts/fakeblogpost');
});

// Building a Blog
app.get('/buildingablog', function(req, res) {
  res.render('blogposts/buildingablog');
});

// Building a Blog
app.get('/whyiprogram', function(req, res) {
  res.render('blogposts/whyiprogram');
});


// ======================================================
//        END URLs
// ======================================================

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static("public"));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
