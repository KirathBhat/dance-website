//Imports
const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const fs = require('fs');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//Mongoose Specific
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/contactDance');
  console.log("Connected to MongoDB");
}

//PUG Specific
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//EXPRESS Specific
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//Server Start
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

//Endpoints
app.get("/", (req, res) => {
    const params = { };
    res.status(200).render('home.pug', params);
})

app.get("/contact", (req, res) => {
    const params = { };
    res.status(200).render('contact.pug', params);
})

app.post("/contact", (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.render("contact.pug")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });
    const params = { };
})

//Mongoose StartUP

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    age: String
});

const Contact = mongoose.model('Contact', contactSchema);