// importing the express framework
import express from "express";

// Create an instance for that imported express framework
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;


// Let our app listen to whatever happens at the port
app.listen(PORT, () => {
    console.log(`Server has started at port: ${PORT}`);
});