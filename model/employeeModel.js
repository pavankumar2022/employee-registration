
//const mongoose = require("mongoose");
import mongoose from "mongoose";
//const validator = require("validator");
//import validator from "validator";

const newSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        minlength: [2, "allowed more than two characters"],
        maxlength: 20
    },
    last_name: {
        type: String,
        require: true,
        minlength: [2, "allowed more than two characters"],
        maxlength: 20
    },
    password:{
        type:String,
        unique:true,
        require:true,
    },
    // confirm_password:{
    //     type:String,
    //     //unique:true,
    //     require:true
    // },
        gender: {
            type: String,
            require: true
        },
       // validate
 /*    age: {
        type: Number,
        require: true,
        validate(value) {
            if (value < 18) {
                console.log("Age of student should be 18+");
            }
        } 
    },*/
    email: {
        type: String,
        require: true,
        unique: [true, "Email is already present"],
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error("Email is invalid !");
        //     }
        // }
    },
    mobile_number: {
        type: Number,
        require: true,
        unique: true,
        min: 10,
        //max: 12
    },
   
    select:{
        type:String,
        require:true
    },
    security:{
        type:String,
        require:true
    }

});
 
const employeeModel = new mongoose.model("Employee",newSchema);
/* const newEmployee = new studentModel({
    name:'Pavan Kumar9',
    department:'Mobile manufacturing unit',
    age:21,
    email:'pavanbaghe420y16@gmail.com',
    mobile:89546987808
}) */
/* collections.find({})
.then((data)=>{
   //console.log(data); 
}).catch((err)=>{
    console.log("Error found "+err);
}) */
/* const data = collections.find({name:'Pavan Kumar'}); */
//console.log(newEmployee); 
//module.exports= studentModel;


//const studentModel= mongoose.model('student',studentSchema);

export{employeeModel};