// Start my server
// Create a variable that pulls the express code required for creating a server
const express = require("express");

//Create a server variable that is gonna be created with the pulled code 
const server = express();

// Create a port that is gonna be accesed by the server
const port = 8080;

// Create a data variable that is gonna be sent to the user when they request it
const data = ['Hakimi'];

//Middleware 
//Add a method interpretor json data to the server
server.use(express.json());

//Interpret the get request to the root directory
server.get('/',(req,res) => {
    console.log('Get was set to the root directory',req.method);
    res.sendStatus(200);
});

// Handle requests at the dashboard endpoint
server.get('/dashboard',(req,res) => {
    console.log('Request has reached the dashboard directory!');
    res.sendStatus(404);
});

// Handle the harvard requests
server.get('/harvard',(req,res) => {
    console.log('User wants a haverd website');
    res.send(`
    <p>Click on the Harvard link below</p>
    <a href="https://www.harvard.edu/">Harvard</a>
    `);
});


// Send the response data to the user when they request the /data endpoint
server.get('/data',(req,res) => {
    console.log('User wants to see the data');
    res.send(`
        <h3>This is the requested data:</h3>
        <p>${data}</p>
    `);
});

// Handle a post request for signup
server.post('/data/signup',(req,res) => {
    const newUser = req.body;
    data.push(newUser.name);
    res.sendStatus(201);
    console.log(newUser);
});

// Handle deletion of user data
server.delete('/api/data',(req,res) => {
    data.pop();
    console.log('Deleted the last entry in the names database');
    res.statusCode(203);
});

// Now let the server listen to the traffic at that port
server.listen(port, () => {
    console.log(`The server has started at port ${port}`);
});