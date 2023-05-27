const express=require("express")
const{connection}=require("./db")
const{userRouter}=require("./routes/user")
const{noteRouter}=require("./routes/post")
const{authenticate}=require("./middleware/authentication")
const port=8080||process.env.port
const cors=require("cors")
require("dotenv").config()
const app=express()

app.use(express.json())
 
app.use(cors())

app.get("/",(req,res)=>{
    res.send("first page")  
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/data",noteRouter)

 
app.listen(port,async()=>{
    try{
        await connection
    }
    catch(err){
        console.log(err.message)
    }
    console.log(`server is running ${port}`)
})