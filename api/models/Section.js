/**
 * Section.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	module_id:{
  		type: 'integer',
  		required: true
  	},
  	section_type:{
  		type:'string',
  		required : true
  	},
  	section_data:{
  		type:'text',
  		required : true
  	},
  	section_display_condition:{
  		type:'text',
  		required : true
  	},
  	section_order:{
  		type:'integer'
  	}
  }
};

