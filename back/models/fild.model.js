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
        require: [true, 'Please enter the sportId'],
    },
      accountPerson:{
        type: Number,
        require: [true, 'Please enter person'],
      },
      description:{
        type: String,
        require:[true, 'Please enter description'],
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