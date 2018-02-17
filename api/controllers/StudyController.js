/**
 * StudyController
 *
 * @description :: Server-side logic for managing studies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   	showStudy:function(req,res) {
   		sails.log('showstudy method called');
   		var study_id=req.param('id');
   		if(!study_id){
 	  		sails.log('showstudy id not found in parameters');
			return res.view('404');
   		}
   		Study.findOne({id:req.param('id')},function(err,study){
   			if(err){
	 	  		sails.log(err,'showstudy error while finding study');
				return res.view('404');
   			}
   			if(study){
	 	  		sails.log('showstudy study found');
   				return res.view('study/study',{study:study});
   			}

	 	  		sails.log('showstudy no study available with this id');
				return res.view('404');

   		})
  	},
   showAll:function(req,res){
      var user_id=req.param('id');
      var host='http://localhost:1337/';
      if(!user_id){
         sails.log('showAll id not found in parameters');
         return res.view('404');
         }
      Study.find({author_id:user_id}).exec(function(err,studies){
         if(err){
            sails.log('showAll studies for id not found ');
           return res.view('404');
         }
          sails.log('showAll studies sucessfull ',studies);
           return res.view('study/table',{user:{id:user_id},studies:studies,host:host});

      })
   },
   studycreate:function(req,res){
      var user_id=req.param('id');
      var host='http://localhost:1337/';
      if(!user_id){
         sails.log('studycreate id not found in parameters');
         return res.view('404');
         }
      sails.log('studycreate studies sucessfull ');
      return res.view('study/create',{user:{id:user_id},host:host});
  },
  addStudy:function(req,res){
    var user_id=req.param('id');
    var title = req.param('title');
    var host='http://localhost:1337/';
    var description = req.param('description');
    var goals = req.param('goals');
    var age = req.param('target_age');
    var duration = req.param('duration');
    var video = req.param('video_url');
    if(!user_id || !title || !description || !goals || !age || !duration || !video){
        return res.redirect('/user/'+user_id+'/study/create?error_message=requiredfields');
    }
    User.findOne({id:user_id}).exec(function(err,user){
      Study.create({study_title:title,study_description:description,study_goals:goals,study_target_age:age,study_duration:duration,study_teaser_video:video,author_id:user,study_likes:0,study_dislikes:0,study_views:0}).exec(function(err,study){
        if(err){
          return res.redirect('/user/'+user_id+'/study/create?error_message=error_in_creation_study');
        }
        return res.redirect('/user/'+user_id+'/study/create');

      });
    });
  }
};

