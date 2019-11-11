const express = require('express')
const bodyparser=require('body-parser')
const dec=require(__dirname+"/funct.js")
console.log(dec)
const app = express()
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res) {
  res.sendFile(__dirname+"/index.html")
})

app.post("/",function (req,res) {
  var anslist=[]
  anslist=dec.encode(req.body.st)
  res.send("Length of original: "+anslist[0]+"<br>Encoded: "+anslist[1]+"<br> Length of encoded:"+anslist[2]+"<br> Decoded: "+anslist[3])

})
app.listen(process.env.PORT || 3000,function () {
  console.log("started")
})
