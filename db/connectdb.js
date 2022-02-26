import mongoose from 'mongoose';
const connectdb=async(DATABASE_URL)=>{
    try{
 const db_options={
     dbname:"company"
 };
 await mongoose.connect(DATABASE_URL , db_options);
 console.log("Connection Done..");
    }catch(err){
        console.log(err);
    }
}

export default connectdb;