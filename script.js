function allSoldiers(){
    fetch("http://localhost:3004/homepage")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

        data.forEach(element => {
            const disSoldiers=document.getElementById("soldiersCon")
            console.log(data);
            const card=document.createElement("div")
            // const image=document.createElement("img")
            // image.src=element.image
            const idf_rank=document.createElement("h4")
            idf_rank.innerText=element.idf_rank
            const first_name=document.createElement("h1")
            first_name.innerText=element.first_name
            const last_name=document.createElement("h2")
            last_name.innerText=element.last_name
            // const city=document.createElement("h3")
            // city.innerText=element.city
            // const date_of_death=document.createElement("h3")
            // const info=document.createElement("h3")
            // info.innerText=element.info
            // date_of_death.innerText=element.date_of_death

            disSoldiers.append(card)
            card.append(idf_rank,first_name,last_name)

            card.className="card"
            
        });
    })
    .catch((e)=>{
        console.log(e);
    })
}

allSoldiers()




