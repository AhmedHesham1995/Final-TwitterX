// const mongoose=require('mongoose')
// const { Schema } = mongoose;

// //posts (ahmed hesham) -- replies (essam)
// const postsSchema=mongoose.Schema({
//     title:{
//         type: String,
//         minLength: 5,
//         maxLength: 1000,
//         required: true
//     },
//     userId:{
//         type: Schema.Types.ObjectId,
//         ref:"User"
//     },
//     updated: Date,
//     replies: [
//         {
//             text: String,
//             created: {type: Date, default: Date.now},
//             postedBy: {type: Schema.Types.ObjectId, ref: 'User'}
//         }
//     ]
//     },{timestamps:true})

// var postsModel=mongoose.model('Post',postsSchema)

// module.exports=postsModel








const mongoose = require('mongoose');
const { Schema } = mongoose;

const postsSchema = mongoose.Schema({
    title: {
        type: String,
        minLength: 5,
        maxLength: 1000,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userProfilePicture: {
        type: String,
        default: 'https://i.pinimg.com/564x/ed/1f/41/ed1f41959e7e9aa7fb0a18b76c6c2755.jpg' // Default value for the user's profile picture
    },
    updated: Date,
    replies: [
        {
            text: String,
            created: { type: Date, default: Date.now },
            postedBy: { type: Schema.Types.ObjectId, ref: 'User' }
        }
    ]
}, { timestamps: true });

var postsModel = mongoose.model('Post', postsSchema);

module.exports = postsModel;
