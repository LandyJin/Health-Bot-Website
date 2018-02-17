/**
 * Study.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	study_title:{
  		type:'text',
  		required : true
  	},
  	study_description:{
  		type:'text',
  		required : true
  	},
  	study_goals:{
  		type:'text',
  		required : true
  	},
  	study_target_age:{
  		type:'integer'
  	},
  	study_duration:{
  		type:'integer'
  	},
  	study_teaser_video:{
  		type:'text'
  	},
  	study_likes:{
  		type:'integer'
  	},
  	study_dislikes:{
  		type:'integer'
  	},
  	study_views:{
  		type:'integer'
  	},
    author_id:{
      model: 'User'
    },
    modules:{
      collection: 'Module',
      via: 'study_id'
    }
  }
};

