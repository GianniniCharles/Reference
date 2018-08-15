require('dotenv').config();

//declare node modules BEFORE your paths.
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require("express-session")
const MongoStore   = require("connect-mongo")(session);
const app = express();

//Paths
const Book         = require('./models/book')


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/library-app', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);



// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

//btw the user/password stuff is what will matter the most where you place it.


//SESSION needs to match with the varName you initalized up top
app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);

const blah = require('./routes/bookRoutes');
app.use('/', blah);

const reviewRoutes = require('./routes/reviewRoutes');//this line grabs routes file
app.use('/', reviewRoutes) //this line says use the prefix on ^that line above us//this will make the route automatically go to the id without us having to put id in the routes
//this makes sense because you won't write one review to all the books, but on a book by book basis.


const authRoutes = require('./routes/authRoutes');
app.use('', authRoutes);


module.exports = app;
