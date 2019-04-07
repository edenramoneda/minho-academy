require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const studentRegController = require('./controllers/studentregistrationController');
//const MinhoMainsPage = require('./controllers/')
var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));//config details for handlebars
app.set('view engine', 'hbs');
app.listen(3000, () => {
    console.log("Server started at port : 3000");
});

app.use('/registration', studentRegController);
app.use(express.static(path.join(__dirname, 'public')));