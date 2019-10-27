const mongoose = require('mongoose');

 // mongoose.connect("mongodb+srv://chiamaka:codenaija@cluster0-lncsu.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true})

   const { Schema } = mongoose;

   const User = new Schema({
       email: { type: String, required: true },
       // username: { type: String}, 
       phoneNumber: { type: String, required: true },
       password: { type: String, required: true },
   
   })
   User.set('toJSON', { virtuals: true });

   // const UserDetails = mongoose.model('User', User);

module.exports = mongoose.model('User', User);

