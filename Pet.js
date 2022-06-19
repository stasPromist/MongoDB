const mongoose =  require("mongoose");
const petSchema = new mongoose.Schema({
    name :{
        type: String,
        required:true
    },
     feed: String,
     age:{
        type: Number,
        min:1,
        max:20
     }
     
});
 module.exports = mongoose.model("pets", petSchema);
