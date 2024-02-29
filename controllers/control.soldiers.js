import{
    allInfo,
    // fname
}from "../modules/info.js"

export const getAll= async(req,res)=>{
    try{
        const data=await allInfo()
        res.json(data)
    }catch(error){
        console.log(error);
        res.status(404).json("error")
    }
}

