const mongoose = require("mongoose");
const db =   process.env.MONGO_URI
exports.connectDB = function(){
    
    mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((con) => {
     console.log(`MongoDB connected at ${con.connection.host}`)
    }).catch(err => console.log(err));
}