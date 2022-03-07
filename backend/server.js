const app = require("./app");
const dotenv = require("./config/config.env");
const dotenv = require("dotenv");
// config
dotenv.config({path:"backend/config/config.env"});
app.listen(process.env.PORT, ()=>{
    console.log(`Server is lsitening on https:/localhost:${process.env.port}`);
});
