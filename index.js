// mongoose - to connect with 
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config" // used to access env 
import taskRouter from "./routes/taskRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors()) 

// db connection 
connectDB();

// Endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.get("/",(req, res)=>{
    res.send("Api Working fine.")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://msdiwahar5:<db_password>@cluster0.7zirx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// trello-backend - mongodb:
// username: msdiwahar5
// password: Lx9dUAKoVxvnSxXR

