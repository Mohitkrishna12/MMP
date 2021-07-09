import mongoose from 'mongoose';

const his_settingsSchema = mongoose.Schema({
    dmess: String,
    service:Boolean,
    admin:String,
    brandfield:String,
    timeStamp: {
        type : String, default: Date.now 
    }
},
  )

var his_settings = mongoose.model('his_settings', his_settingsSchema);

export default his_settings;