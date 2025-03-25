//Imports
const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const fs = require('fs');

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

//Other

app.post("/contact", (req, res)=>{
    nam = req.body.name;
    age = req.body.age;
    phone = req.body.phone;
    email = req.body.email;
    let outputToWrite = `The name of the client is ${nam}, age is ${age} years, phone number is ${phone}. Email is ${email}. \n`;
    fs.writeFileSync('output.txt', outputToWrite);
    const params = {'message': 'Your form has been submitted succesfully!'}
    res.status(200).render('home.pug', params);
    
    
})