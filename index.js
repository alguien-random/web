const express = require('express');
const { PORT } = require('./config.json');
const path = require('path');
const app = express();

app.get('/logo', async (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'logo.png'));
});

app.get('/home', async (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/help', async (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'help.html'));
});

app.get('/what-we-are', async (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'what-we-are.html'));
});

app.get('*', async (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server ready at: http://web-hypermc.ddns.net${PORT == 80 ? '/' : `:${PORT}/`}`);
});