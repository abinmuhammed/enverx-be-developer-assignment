const express=require('express');
const { Errorhandler } = require('./middleWares/errorHandler');
const userRouter = require('./routes/blogRoutes');
const app=express();
require('dotenv').config()
const dbconnect=require('./config/dbConnect')

const PORT=4000
dbconnect()

// app.get("/", (req, res) => {
//     res.send("hlooooo world");
//   });
app.use(express.json())
app.use('/',userRouter)
app.use(Errorhandler)
app.listen(PORT,()=>{
    console.log(`App is running in localHost ${PORT}`);
})
