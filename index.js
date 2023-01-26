const getBooks = async function() {
    try{
        let response = await fetch('https://striveschool-api.herokuapp.com/books')
        if(response.ok){
            let data = await response.json()
            console.log(data)
            let container = document.querySelector(".container")
            let counter = 0
            for (let i=0; i<data.length; i++){
                if(i === 0 || i % 3 === 0){
                    counter ++
                    container.innerHTML += `
                     
                    <div id="row${counter}" class="row">
                        <div class="col col 4">
                            <div class="card" style="width: 18rem;">
                            <img src="${data[i].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${data[i].title}</h5>
                            <p class="card-text">${data[i].price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    ` 
                } else{
                    let row = document.getElementById("row"+ counter)
                    row.innerHTML += 
                    `
                     
                    
                        <div class="col col 4">
                            <div class="card" style="width: 18rem;">
                            <img src="${data[i].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${data[i].title}</h5>
                            <p class="card-text">${data[i].price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                    
                    ` 
                }
                }
                //     container.innerHTML += `
                //     </div> 
                //     <div class="row">
                //         <div class="col col 4">
                //             <div class="card" style="width: 18rem;">
                //             <img src="${data[i].img}" class="card-img-top" alt="...">
                //             <div class="card-body">
                //             <h5 class="card-title">${data[i].title}</h5>
                //             <p class="card-text">${data[i].price}</p>
                //             <a href="#" class="btn btn-primary">Go somewhere</a>
                //             </div>
                //             </div>
                //         </div>
                    
                //     ` 
                // } else {
                //     container.innerHTML += `
                //     <div class="col col 4">
                //             <div class="card" style="width: 18rem;">
                //             <img src="${data[i].img}" class="card-img-top" alt="...">
                //             <div class="card-body">
                //             <h5 class="card-title">${data[i].title}</h5>
                //             <p class="card-text">${data[i].price}</p>
                //             <a href="#" class="btn btn-primary">Go somewhere</a>
                //             </div>
                //             </div>
                //         </div>
                //         `
                // }
            
        } else {
            console.log("qualcosa è andato storto")
        }
    } catch (error){
        console.log("è presente un errore di tipo: ", error)
    }
}

getBooks()