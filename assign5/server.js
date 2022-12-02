/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:Tun Aung Thaung
 * Email:thaungt@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 1239;

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
