console.log('buckets controller');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bucket = mongoose.model('Bucket');

function BucketsController(){
      this.index = function(req,res){
        User.find({},function(err,data){
          res.json(data);
        })
      }
      this.add = function(req,res){
       
        var bucket = new Bucket(req.body)
        bucket.user = req.session.user._id;
        User.findOne({_id:req.session.user._id},function(err,data){
          data.buckets.push(bucket._id);
          data.save()
        })
        if (bucket.tagger) {
          User.findOne({_id:bucket.tagger},function(err,data){
          data.buckets.push(bucket._id);
          data.save();
          })
        }
        bucket.save(function(err,data){
          res.json(data);
        });


      }

    this.mylist = function(req,res){
      User.findOne({_id:req.session.user._id}).populate('buckets').exec(function(err,data){
        User.populate(data,{path:'buckets.user',model:'User'},function(err,results){
          console.log("in the bucket js Controller", req.session.user._id)
          if(err){
            console.log(err)
          }
          else{
            res.json(data);
          }
        })
      })
    };

    this.show = function(req, res){
      User.findOne({_id:req.params.id}).populate('buckets').exec(function(err,data){
        User.populate(data,{path:'buckets.user',model:'User'},function(err,results){
          if(err){
            console.log(err);
          }
          else{
            res.json(data);
          }
        })
      })
    }

  this.check = function(req,res){
      Bucket.findOne({_id: req.body.bucket_id}, function(err, bucket){
        if(bucket.checked == false){
          bucket.checked = true;
        }
        else{
          bucket.checked = false;
        }
        bucket.save();
      })
  }
}

module.exports = new BucketsController();
