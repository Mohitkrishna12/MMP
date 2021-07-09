import mongoose from 'mongoose';

const his_bfieldSchema = mongoose.Schema({
    admin:String,
    bankfield:String,
    timeStamp: {
        type : String, default: Date.now 
    }
},
  )

var his_bfieldMessage = mongoose.model('his_bfieldMessage', his_bfieldSchema);

export default his_bfieldMessage;