const mongoose = require('mongoose');

const fildScheme = new mongoose.Schema({

    nameFild: {
        type:String,
        required: [true, 'Please enter you name sport '],
    },  
    sceneryId: {
        type:Object,
        required: [true, 'Please enter you scenary'],
    }, 
    sportId:{
        type:String,
        require: [true, 'Please entre the sportId']
    },
    fildImgUrl:{
        type:String,
        require: [true, 'Please entre the image']
      },
      accountPerson:{
        type: Number,
        require: [true, 'Please entre person']
      },
      description:{
        type: String,
        require:[true, 'Please entre description']
      },
    rating:{
        type:Number,
        required: [true, 'Please enter your rating scenery'],
    },
    status: {
        type: String,
        default: 'active',
    },

});

const Fild = mongoose.model( 'Fild', fildScheme );

module.exports = { Fild }