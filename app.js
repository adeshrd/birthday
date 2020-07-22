const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const app = express();
const path = require('path');

// enable ssl redirect
app.use(sslRedirect());

app.use(express.static(path.join(__dirname, '.')));


app.listen(process.env.PORT || 3000);