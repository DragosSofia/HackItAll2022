const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const catRoute = require("./routes/takeESG")

dotenv.config();

mongoose
.connect(process.env.MONO_URL)
.then(() => console.log("Db connection successfully"))
.catch((err) =>{
        console.log(err);
});
    
    app.use(express.json());
    app.use("/api/ESG", catRoute);
   
    
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
});