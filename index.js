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

app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
try {
    var data = await stuModel.findByIdAndDelete(req.params.id,req.body);
    res.send("Dleted succcesfully")
} catch (error) {
    res.send(error)
}
 })
 
 app.put('/edit/:id',async(req,res)=>{
    try {
       var data= await stuModel.findByIdAndUpdate(req.params.id,req.body);
       res.send("updated succesfully");

    } catch (error) {
        res.send(error.message)
    }
 })











app.listen(port,(req,res)=>{
    console.log(`server is listening in the port ${port}`);

});