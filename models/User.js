const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    linked_email: {
        type: String,
        required: true
    },
    isLinked:{
        type: Boolean,
        required: true
    }
})

const User = mongoose.model("User", UserSchema);

module.exports =  User;