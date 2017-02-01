var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new mongoose.Schema({
  name:{
    type:String,
  required:[true,"name cannot be blank"],
},
buckets:[{type:Schema.Types.ObjectId,ref:'Bucket'}]
})
mongoose.model('User', UserSchema);
