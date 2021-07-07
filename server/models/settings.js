import mongoose from 'mongoose';

const settingsSchema = mongoose.Schema({
    dmess: String,
    service:Boolean,
    admin:String,
    bankfield:String,
    createdAt: {
        type : String, default: Date.now 
    }
},
  )

var settingsMessage = mongoose.model('settingsMessage', settingsSchema);

export default settingsMessage;