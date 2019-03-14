const path = require('path');
const express = require('express');
const app = express();

const amphibianRoutes = require('./routes/amphibians');
const indexRoutes = require('./routes/index');

app.use(express.static(path.join(__dirname,'public')));

app.use(indexRoutes);
app.listen(3000);