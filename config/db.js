const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesDbCrud').then(()=>{
        console.log("MD Server Start......");
}).catch(err => console.log(err));

module.exports = mongoose;



