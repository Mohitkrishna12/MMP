import mongoose from 'mongoose';

const bfieldSchema = mongoose.Schema({
    admin:String,
    bankfield:String,
    timeStamp: {
        type : String, default: Date.now 
    }
},
  )

var bfieldMessage = mongoose.model('bfieldMessage', bfieldSchema);

export default bfieldMessage;