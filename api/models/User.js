/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user_Fname:{
      type: 'string',
      required: true
    },
    user_email:{
      type:'string',
      required : true
    },
    user_username:{
      type:'string',
      required : true
    },
    user_password:{
      type:'text',
      required : true
    },
    user_type:{
      type:'integer'
    },
    user_dob:{
      type:'date'
    },
    user_goals:{
      type:'text'
    },
    user_pic:{
      type:'text'
    },
    studies:{
      collection: 'Study',
      via : 'author_id'
    }

  }
};

