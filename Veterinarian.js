const mongoose =  require("mongoose");
const vetSchema = new mongoose.Schema({
    Name:String,
    LastName:String,
    Telephone:Number
});
module.exports = mongoose.model("veterinarians", vetSchema);
