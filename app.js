const express = require('express');
const path = require('path')
const app = express();
const port = 80;

// Express Specific Stuff
app.use('/static', express.static('static'))  // For saving static files

// Pug Specific Stuff
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views',path.join(__dirname, 'views'))  // Set the Views directory


// EndPoints
app.get('/',(req, res)=>{
    const params = { }
    res.status(200).render('index.pug', params);
})
app.get('/about' ,(req , res)=>{
    res.sendFile(path.join(__dirname , '/views/about.html'))
})
app.get('/service' ,(req , res)=>{
    res.sendFile(path.join(__dirname , '/views/service.html'))
})
app.get('/contact' ,(req , res)=>{
    res.sendFile(path.join(__dirname , '/views/contact.html'))
})
app.get('/about' ,(req , res)=>{
    res.sendFile(path.join(__dirname , '/views/about.html'))
})


// Start the Server
app.listen(port,()=>{
    console.log(`The Application is Started Sucessfully..on port ${port}`)
})