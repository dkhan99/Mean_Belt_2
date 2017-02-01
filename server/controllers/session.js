console.log('user controller');

var mongoose=require('mongoose');
var User=mongoose.model('User');

function SessionsController(){
  this.index = function(req,res){
    
  };

  this.logReg = function(req,res){
      User.findOne({name:req.body.name},function(err,user){
          if(!user){
          var user=new User(req.body);
          user.save(function(err,user){
            if(err){
              res.json(err);
            }
            else{

              req.session.user=user;
              req.session.save()
              res.json({status:true})
            }
          })
        }
        else{
          req.session.user=user;
          req.session.save()
          res.json({status:true})
        }
      })
  }

    this.logout = function(req,res){
      console.log(req.session.user)
      req.session.destroy()
      res.redirect('/')
    }
    
    this.checkSess = function(req, res){
      if(req.session.user){
        res.json(req.session.user)
      }else{
        res.send(null)
      }
    }

}

module.exports = new SessionsController();