// Importing the token module
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a password from which the token is to be generated
const password = "heythere";

// Create a token
const tk = jwt.sign( {id: "password"},process.env.JSON_TOKEN, {expiresIn: "24h"});

// Print out the token
console.log("Token:");
console.log(tk);

// Now hash the password asynchronously
const hash = bcrypt.hashSync(password, 10);

// Print the hashed password
console.log("Hashed Password:");
console.log(hash);