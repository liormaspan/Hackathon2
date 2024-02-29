import { db } from "../config/db.js"

export const allInfo=()=>{
    return db ("soldiers").select("soldiers_id","idf_rank","first_name","last_name","city","date_of_death","info");

};

export const fname=()=>{
    return db ("soldiers")
    .select("first_name")
}