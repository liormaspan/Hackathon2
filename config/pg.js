db.select("soldiers_id","idf_rank","fisrt_name","last_name","city","Date_of_death","info")
form("soldiers")
.then((rows)=>{
    console.log(rows);
})
.catch((e)=>{
    console.log(e);
})