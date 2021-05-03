const express = require('express');
const app = express();
var router = require('./routes');
var indexRouter = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

//view engine
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/new', indexRouter);



app.listen(3000,console.log('port 3000....'));