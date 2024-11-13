// mongoose - to connect with 
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors()) 


// db connection 
connectDB();


// Routes
app.get("/",(req, res)=>{
    res.send("Api Working fine.")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})


// mongodb+srv://msdiwahar5:<db_password>@cluster0.7zirx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

