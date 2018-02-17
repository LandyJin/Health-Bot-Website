/**
 * Module.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	module_title:{
  		type:'text',
  		required : true
  	},
  	module_description:{
  		type:'text',
  		required : true
  	},
  	module_start_time:{
  		type:'datetime',
  		required : true
  	},
  	module_duration:{
  		type:'integer'
  	},
  	module_views:{
  		type:'integer'
  	},
    study_id:{
      model:'Study'
    }
  }
};

