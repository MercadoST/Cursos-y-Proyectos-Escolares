const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'circulosangre'
}, 'single'))
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'))
})