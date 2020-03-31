const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/memory/index.html')
})
app.get('/css', function (req, res) {
  res.sendFile(__dirname + '/memory/style.css')
})
app.get('/javascript', function (req, res) {
  res.sendFile(__dirname + '/memory/index.js')
})

app.use(express.static('public'))
.listen(process.env.PORT, () => {
    console.log("server started");
  });
  