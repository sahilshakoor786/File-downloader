const express=require('express') 
const app = express()
const fs = require('fs')
app.listen(3000)
app.use(express.static(__dirname))
app.use(express.static(__dirname+'/files'))
app.set('views','./')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
fs.readdir(__dirname+'/files',(err,files)=>{
res.render('index',{files:files})

})

})
