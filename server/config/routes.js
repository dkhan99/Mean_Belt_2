var session=require('./../controllers/session.js');
var bucket=require('./../controllers/bucket.js');
module.exports=function(app){
  app.post('/user/login',function(req,res){
    session.logReg(req,res);
  })
  app.get('/logout',function(req,res){
    session.logout(req,res)
  })
  app.get('/user/checksess', function(req, res){
		session.checkSess(req, res)
	})
  app.get('/users',bucket.index);
  app.post('/bucket/add',bucket.add);
  app.get('/buckets/all',bucket.mylist);
  app.get('/show/:id', bucket.show);
  app.post('/bucket/checked', function(req, res){
    bucket.check(req,res)
  })
}
