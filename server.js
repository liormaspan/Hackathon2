import express from "express"
import cors from "cors";
import { db } from "./config/db.js";
import soldiers_router from "./routes/router.soldiers.js"
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/router.soldiers.js";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
 const app=express()

app.use(express.static(path.join(__dirname)))
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.use(router)
 app.use(cors())


 app.listen(3004,()=>{
    console.log("we running on port 3004");
 })

app.get("/homepage",(req,res)=>{
    db("soldiers").select("*")
    .then(data=>{
        res.json(data)
    }).catch(e=>{
        console.log(e);
        res.status(404).json({msg:"not found"})
    })
})

app.post("/soldier",(req,res)=>{
    console.log(req.body);
    const {soldierName}=req.body;
    db("soldiers").select("*").whereILike("first_name","%"+soldierName+"%")
    .then(data=>{
        res.json(data)
    }).catch(e=>{
        console.log(e);
        res.status(404).json({msg:"not found"})
    })
})



