const uiCreation = (data) => {
    console.log(data, '======');
    
    
    
    
    const UiImage = document.querySelector('.card-img')
    const UiTitle = document.querySelector('.card-title')
    const Uidescription = document.querySelector('.cardDescription')
    const mainDiv = document.querySelector ('.mainDiv')
    
    
    const mapData = data.map((item)=>{


        const singleData = `<div class="contentMain col-6"><img id="image" src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`

        return singleData



    })


    mainDiv.innerHTML = mapData.join('');
    
    
    
}
    

const getCountryData = () => {
    fetch(`https://fakestoreapi.com/products/`)
    .then(function (response){
        console.log (response, "==>> response of fetch") 
        return response.json()
    }).then(function(data){
        console.log(data, "==>> my data as json")
        uiCreation(data)
    })
}


getCountryData()


const getAllProducts = () => {
    fetch (`https://catfact.ninja/fact/`)
    .then(resp => resp.json())
    .then(data => console.log(data, "==>>allProducts"))
}

getAllProducts()