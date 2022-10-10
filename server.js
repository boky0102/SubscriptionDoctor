const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: false}));

const mongoose = require('mongoose');


const mongoDB = "mongodb://127.0.0.1:27017/subdoc";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("db connected"))
.catch(err => console.log(err));


//Models import
const User = require('./models/User');

app.get('/', (req,res) => {
    console.log("Server working locally");
    const newUser = new User({
        name: "Borna",
        linked_email: "bivankov@protonmail.com",
        isLinked: true
    })

    newUser.save().then(() => {
        User.find().then((Users) => {
            console.log(Users);
        })
    }).catch(() => {
        console.log("not saved")
    });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
} )