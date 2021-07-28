import mongoose from 'mongoose';

const topupSchema = mongoose.Schema({
    source: String,
    actived:Boolean,
    code:String,
    image:String,
    timeStamp: {
        type : String, default: Date.now 
    }
},
  )

var topupMessage = mongoose.model('topupMessage', topupSchema);

export default topupMessage;