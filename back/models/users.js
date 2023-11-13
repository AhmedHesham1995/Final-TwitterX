// const mongoose=require("mongoose")
// const bcrypt=require('bcryptjs')

// const usersSchema=mongoose.Schema({
//     name:{
//         type: String,
//     },
//     email:{
//         type: String,
//         required: true,
//         unique: true
//     },
//     password:{
//         type: String,
//         required: true,
//         minLength:6
//     },
//     // username:{
//     //     type: String,
//     //     required: true,
//     //     unique: true,
//     //     minLength:3
//     // },
//     // firstName:{
//     //     type: String,
//     //     required: true,
//     //     minLength:3,
//     //     maxLength:15
//     // },
//     // lastName:{
//     //     type: String,
//     //     required: true,
//     //     minLength:3,
//     //     maxLength:15
//     // },
//     // location:{
//     //     type: String
//     // },
//     // bio:{
//     //     type: String
//     // },
//     profilePicture:{
//         type: String,
//         default:''
//     },
//     // role:{
//     //     type: String,
//     //     enum: ["user","admin"],
//     //     default: "user"
//     // },
//     dob:Date},{timestamps:true})


//     usersSchema.pre("save",async function(next){
//         console.log(this);

//         var salt=await bcrypt.genSalt(10)
//         var hashedPassword=await bcrypt.hash(this.password,salt)
//         this.password=hashedPassword
//         next()
//     })

// const usersModel=mongoose.model("User",usersSchema)

// module.exports=usersModel








const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const usersSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    profilePicture: {
        type: String,
        default: 'https://i.pinimg.com/564x/ed/1f/41/ed1f41959e7e9aa7fb0a18b76c6c2755.jpg' // Default profile picture URL
    },
    username:{
        type: String,
        required: true,
        unique: true,
        minLength:3
       },
    dob: Date
}, { timestamps: true });

usersSchema.pre("save", async function (next) {
    var salt = await bcrypt.genSalt(10);
    var hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;

    // Set a default profile picture if the user doesn't provide one
    if (!this.profilePicture) {
        this.profilePicture = 'https://i.pinimg.com/564x/ed/1f/41/ed1f41959e7e9aa7fb0a18b76c6c2755.jpg';
    }

    next();
});

const usersModel = mongoose.model("User", usersSchema);

module.exports = usersModel;
