const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    studentName:String,
    studentAge:Number,

});

const stdentmodel = mongoose.model("student",studentSchema);
module.exports=stdentmodel;

