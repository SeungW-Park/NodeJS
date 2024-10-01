const express = require('express');
const app = express();
const PORT = 5500;

const checkAuth = (req, res, next) => {
  console.log('has Admin Permission');
  next();
};

const getUser = (req, res) => {
  console.log('user information accessed');
  res.send('user Information');
};

app.get('/users', checkAuth, getUser);

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});