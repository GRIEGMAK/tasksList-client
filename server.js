function requireHTTPS(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
} 
const express = require('express');
const path = require('path');
const app = express();
app.use(requireHTTPS);
// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://taskslist339.herokuapp.com/projects');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.static('./dist/tasklist-client'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/tasklist-client/'}
);
});

app.listen(process.env.PORT || 8080);