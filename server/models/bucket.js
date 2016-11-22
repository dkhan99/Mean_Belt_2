var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var BucketSchema=new mongoose.Schema({
  user:{type:Schema.Types.ObjectId,ref:'User'},
  title:{type:String,  required:[true,"title cannot be blank"],},
  description:{type:String,  required:[true,"description cannot be blank"],},
  tagger:{type:Schema.Types.ObjectId,ref:'User'},
  checked: {type: Boolean, default: false},
},{timestamps:true})
mongoose.model('Bucket',BucketSchema);
