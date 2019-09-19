const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
const errorController = require('./controller/error');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/@mdi/font/fonts')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);