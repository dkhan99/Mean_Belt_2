var mongoose=require('mongoose');
var User=mongoose.model('User');
var Bucket=mongoose.model('Bucket');
module.exports=(function(){
  return{
    index:function(req,res){
      User.find({},function(err,data){
        res.json(data);
      })
    },
    add:function(req,res){
      var bucket=new Bucket(req.body)
      bucket.user=req.session.user._id;
      User.findOne({_id:req.session.user._id},function(err,data){
        data.buckets.push(bucket._id);
        data.save()
      })
      User.findOne({_id:bucket.tagger},function(err,data){
        data.buckets.push(bucket._id);
        data.save();
      })
      bucket.save(function(err,data){
        res.json(data);
      });

    },
    index2:function(req,res){
      Bucket.find({user:req.session.user._id}).populate('user').populate('tagger').exec(function(err,data){
          res.json(data);
      })
    },
    show:function(req, res){
    User.findOne({_id:req.params.id}).populate('buckets').exec(function(err,data){
    User.populate(data,{path:'buckets.user',model:'User'},function(err,results){
    if(err){
      console.log(err)
    }
    else{
      res.json(data);
    }
  })
})
},
check: function(req,res){
      Bucket.findOne({_id: req.body.bucket_id}, function(err, bucket){
        if(bucket.checked == false){
          bucket.checked = true;
        }
        else{
          bucket.checked = false;
        }
        bucket.save();
      })
    },
  }
})();
