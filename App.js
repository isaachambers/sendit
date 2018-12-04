var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())
const port = 7000;
app.get('/buttocks', (req,res)=>{
    let buttocks = [ 'a','b','c']
    res.send(buttocks)
})
app.listen(port, (err)=>{
    if(!err) console.log(`App running on port ${port}`);

})