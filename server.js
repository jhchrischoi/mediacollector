require('dotenv').config()
require('./config/database');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const checkToken = require('./config/checkToken');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(checkToken)
// Authorization Headers debugging
// app.use((req, res, next) => {
//   if(req.headers){
//     console.log(req.headers)
//   }
//   next()
// })
app.use('/api/users', require('./routes/api/users'))
app.use('/api/movies', require('./routes/api/movies'))
app.use('/api/media', require('./routes/api/media'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});