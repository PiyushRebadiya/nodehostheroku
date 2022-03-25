const express = require("express")
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const multer  = require('multer')
const path = require("path")

const userRoutes = require("./Route/user")
const app = express();
const cookieParser = require('cookie-parser')

dotenv.config()

mongoose.connect(
    process.env.DB_ACCESS,
    {useUnifiedTopology: true,useNewUrlParser:true},
    () => console.log("connect to mongoDB!!!")
)


app.use(express.json())
app.use(cookieParser());

// // Storage engine
// const storage = multer.diskStorage({
//     destination: './images',
//     
// })

// const upload = multer({
//     storage: storage,
//     // limits:{fileSize:100000} 
// })

app.use('/profile',express.static('./images'))
// app.post("/upload",upload.single('profile'),(req,res)=>{
//     res.json({
//         success:1,
//         profile_url:`http://localhost:8000/profile/${req.file.filename}`
//     })
//     // console.log("req.query",req.query);
//     // console.log("req.body",req.body);
//     // console.log("req",req);
// })
app.use("/", userRoutes);

app.listen(process.env.LOCAL_PORT || 8000, () => console.log("Server ready 8000"))