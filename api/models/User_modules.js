/**
 * User_modules.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	user_id:{
  		type: 'integer',
  		required:true
  	},
  	module_id:{
  		type:'integer',
  		required : true
  	},
  	section_id:{
  		type:'integer',
  		required : true
  	},
  	module_started_on:{
  		type:'datetime',
  		required : true
  	},
  	module_completed_on:{
  		type:'datetime',
  		required : true
  	}
  }
};

