import mongoose from "mongoose";
const userschema= new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}

})
const modeluser= mongoose.model('userinfos',userschema)
const modeluser1= mongoose.model('logininfos',userschema)
export { modeluser,modeluser1}