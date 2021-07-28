import mongoose from 'mongoose';

const masterdbSchema = mongoose.Schema({
    bankoptions:Array,
    brandoptions:Array,
    
} )

var masterdb = mongoose.model('masterdb', masterdbSchema);

// var options= new masterdb({
//     brandoptions :[
//   { value: 'SBI', label: 'SBI' },
//   { value: 'ICICI Bank', label: 'ICICI Bank' },
//   { value: 'Andhra Bank', label: 'Andhra Bank' },
//   { value: 'Indian Bank', label: 'Indian Bank' },
//   { value: 'Canara Bank', label: 'Canara Bank' }
// ],
// bankoptions : [
//   { value: 'Passport', label: 'Passport' },
//   { value: 'Military', label: 'Military' },
//   { value: 'Driving License', label: 'Driving License' },
//   { value: 'KTP indonesia', label: 'KTP indonesia' }
// ]
// });
// options.save();

export default masterdb;