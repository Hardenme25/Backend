// importing the express framework
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Create an instance for that imported express framework
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Get the filename of the current file
const __filename = fileURLToPath(import.meta.url);

// Get the foldername of the current file
const __dirname = dirname(__filename);

// Relate the public directory to the current directory
app.use(express.static(path.join(__dirname,"../Public")));

// Enable our app handle json files
app.use(express.json());

// Interprete the get request at the root directory
app.get("/", (req,res) => {
    console.log("Response at the root directory has been detected!");
    const file = path.join(__dirname,"Public","index.html");
    res.sendFile(file);
});


// Let our app listen to whatever happens at the port
app.listen(PORT, () => {
    console.log(`Server has started at port: ${PORT}`);
});