/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  register:function(req,res) {
   		sails.log('user.register method called');
  		var error=req.param('error_message');
  		if(error){
   			return res.view('user/register',{error:error});
  		}
   			return res.view('user/register',{error:false});


  	},
    login:function(req,res) {
      sails.log('user.login method called');
      var error=req.param('error_message');
      if(error){
        return res.view('user/login',{error:error});
      }
        return res.view('user/login',{error:false});


    },
  	dashboard:function(req,res){
      var id=req.param('id');
      var host='http://localhost:1337/';
      if(!id){
        return res.view('404');
      }
      User.findOne({id:id}).exec(function(err,user){
        if(err){
          return res.redirect('/user/login?error_message=requiredfields');
        }
        if(!user){
          return res.redirect('/user/login?error_message=requiredfields');
        }
        sails.log('user.dashboard method called');
        return res.view('user/dashboard',{user:user,host:host});
      
      });
    },
  	create:function(req,res){
  		var user_Fname=req.param('Fname');
  		var user_username=req.param('username');
  		var user_email=req.param('email');
  		var user_dob=req.param('user_dob');
  		var user_goals=req.param('user_goals');
  		var user_password=req.param('password');
  		var confirm=req.param('confirm');
  		var user_type=req.param('user_type');
   		sails.log('user.CREATE method called');
  		if( !user_Fname || !user_username || !user_email || !user_dob || !user_goals || !user_password || !confirm || !user_type || (user_password !=confirm)){
   			sails.log('user.CREATE  fielderror  called');
  			return res.redirect('/user/create?error_message=requiredfields');
  		}
      var bcrypt = require('bcrypt');
      const saltRounds = 10;
      var upload = req.file('user_pic')._files[0].stream,
            headers = upload.headers,
            byteCount = upload.byteCount,
            validated = true,
            errorMessages = [],
            fileParams = {},
            settings = {
                allowedTypes: ['image/jpeg', 'image/png'],
                maxBytes: 100 * 1024 * 1024
            };
      bcrypt.genSalt(saltRounds, function(err, salt) {
         bcrypt.hash(user_password, salt, function(err, hash) { 
          
          if (_.indexOf(settings.allowedTypes, headers['content-type']) === -1) {
            validated = false;
            return res.redirect('/user/create?error_message=wrongfiletype');
          }
          if (byteCount > settings.maxBytes) {
            validated = false;
            return res.redirect('/user/create?error_message=FileSizeexceded');
          }
          if (validated) {
        		req.file('user_pic').upload({
      		  dirname: require('path').resolve(sails.config.appPath, 'assets/images')
      		  },function (err, uploadedFiles) {
      		  if (err) return res.send(err);
      		
              sails.log('user.CREATE  return  called');
              var data={user_Fname:user_Fname,user_username:user_username,user_email:user_email,user_dob:user_dob,user_goals:user_goals,user_password:hash,user_type:user_type,user_pic:uploadedFiles[0].fd};
              User.create(data).exec(function(err,user){
      	  			return res.redirect('/user/dashboard/'+user.id);
      	   		});	
           	});
          }
        });
      });
   	},
    signin:function(req,res){
      var user_username=req.param('username');
      var user_password=req.param('password');
      sails.log('user.Login method called');
      if( !user_username || !user_password ){
        sails.log('user.Login  fielderror  called');
        return res.redirect('/user/login?error_message=requiredfields');
      }
      var bcrypt = require('bcrypt');
      const saltRounds = 10;
       User.findOne({user_username:user_username}).exec(function(err,user){
          if(err){
            sails.log('user.Login  User does not exist');
            return res.redirect('/user/login?error_message=ruser_does_not_exist');
          }
          if(user){
            bcrypt.compare(user_password, user.user_password, function(err, resp) {
            if(!resp){
              sails.log('user.Login  password does not match');
              return res.redirect('/user/login?error_message=password_does_not_match');  
            }
            sails.log('user.Login  Login Successfull');
            return res.redirect('/user/dashboard/'+user.id);  
            });
          }else{
              sails.log('user.Login  user not found');
              return res.redirect('/user/login?error_message=user_not_found');
          }
       }); 

      
    },
    profile:function(req,res){
      var id=req.param('id');
      var host='http://localhost:1337/';
      if(!id){
        return res.view('404');
      }
      User.findOne({id:id}).exec(function(err,user){
        if(err){
          return res.redirect('/user/login?error_message=requiredfields');
        }
        if(!user){
          return res.redirect('/user/login?error_message=requiredfields');
        }
        sails.log('user.profile method called');
        return res.view('user/profile',{user:user,host:host});
      
      });
    }
};

