import express from "express"
import{ 
    getAll,
    // getFname,
}
from "../controllers/control.soldiers.js"


const router = express.Router()

router.get("/all",getAll)
// router.post("/all",getFname)
export default router;