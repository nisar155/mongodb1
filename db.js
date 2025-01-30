const mongoose = require("mongoose");

//mongoose.connect("url").them(()=>{}).catch(()=>{})

    mongoose.connect("mongodb+srv://nisar:nuni@cluster0.aujgr.mongodb.net/nisar's?retryWrites=true&w=majority&appName=Cluster0"

    )
    .then(()=>{console.log("connected to Db")})
    .catch((err)=>{console.log(err)})