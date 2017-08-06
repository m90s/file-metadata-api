const http = require("http");
const express = require("express");
const multer  = require('multer');
const upload = multer();
const app = express();


app.post('/fileupload', upload.single('filetoupload'), function(req, res){
  //const fileSize = req.files[size];
  //res.json({'size': fileSize});
  res.json({'size': req.file.size});
})


app.get('/', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
})



app.listen(8080, function(){
  console.log("Running on 8080");
  
})