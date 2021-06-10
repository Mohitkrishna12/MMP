import express from "express";
import  bodyParser from "body-parser";
import userRoutes from "./users.js"
import mongoose from "mongoose"
import cors from 'cors';
const app=express();
app.use(cors());
mongoose.connect("mongodb://localhost:27017/users",{useNewUrlParser:true});


// app.post("/",function(res,req){
// 	var email=req.body.email;
// 	var password=req.body.password;
// 	console.log(email);
// 	console.log(password);
// });
app.use("/Register",userRoutes);

app.listen(8000,function(){
	console.log("runnig");
})