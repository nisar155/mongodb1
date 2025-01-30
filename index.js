var express = require("express");


require("./db");

const stuModel=require("./model/student")
var app = express();

var port = 3000;
app.use(express.json())
//api to add data to db
app.post("/",(req,res)=>{
    try {
        stuModel(req.body).save();
        res.send("data added succesfully" )
    } catch (error) {
        res.send(error)
    }

})
//api to read the data in the db
app.get('/',async(req,res)=>{
   try {
    var data = await stuModel.find();
    res.send(data);
   } catch (error) {
    res.send(error)
   }
})


app.listen(port,(req,res)=>{
    console.log(`server is listening in the port ${port}`);

});