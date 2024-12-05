

import express from "express"
const app=express();
import stuRoute from "./routes/studentRoute.js";
app.use("/student",stuRoute);
app.get("/",(req,res)=>{
    res.send("welcome to cybrom");
})

app.listen(8000,()=>{
    console.log("server run on 8000")
})