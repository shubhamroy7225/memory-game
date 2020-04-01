const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/memory/home.html')
})
app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/memory/index.html')
})
app.get('/css', function (req, res) {
  res.sendFile(__dirname + '/memory/style.css')
})
app.get('/javascript', function (req, res) {
  res.sendFile(__dirname + '/memory/script.js')
})
app.get('/img1', function (req, res) {
  res.sendFile(__dirname + '/img/1.jpg')
})
app.get('/img2', function (req, res) {
  res.sendFile(__dirname + '/img/2.jpg')
})
app.get('/img3', function (req, res) {
  res.sendFile(__dirname + '/img/3.jpg')
})
app.get('/img4', function (req, res) {
  res.sendFile(__dirname + '/img/4.jpg')
})
app.get('/img5', function (req, res) {
  res.sendFile(__dirname + '/img/5.jpg')
})
app.get('/img6', function (req, res) {
  res.sendFile(__dirname + '/img/6.png')
})
app.get('/img7', function (req, res) {
  res.sendFile(__dirname + '/img/7.jpg')
})
app.get('/img8', function (req, res) {
  res.sendFile(__dirname + '/img/8.jpg')
})
app.get('/img9', function (req, res) {
  res.sendFile(__dirname + '/img/9.jpg')
})
app.get('/img10', function (req, res) {
  res.sendFile(__dirname + '/img/10.jpg')
})
app.get('/img11', function (req, res) {
  res.sendFile(__dirname + '/img/memory.jpeg')
})
app.use(express.static('public'))
.listen(process.env.PORT, () => {
    console.log("server started");
  });
  