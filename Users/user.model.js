const mongoose = require('mongoose');

( async function(){
   await  mongoose.connect("mongodb+srv://chiamaka:codenaija@cluster0-lncsu.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true})

   const { Schema } = mongoose;

   const User = new Schema({
       email: { type: Schema.Types.String },
       password: { type: Schema.Types.String },
   
   })
   const UserDetails = mongoose.model('User', User);

})()

