const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling uncaught exceptions
process.on("uncaughtException", (err)=> {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception error.`);
    process.exit(1);
});
// config
dotenv.config({path:"backend/config/config.env"});
// Connecting to db
connectDatabase();
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on https://localhost:${process.env.PORT}`);
});


// Unhandled promise rejections
process.on("unhandledRejection", (err)=>{
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to unhandled rejection promise error.`);
   server.close((err)=>{
       process.exit(1);
   });
});