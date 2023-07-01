
let contentContainer = document.getElementById("contentContainer")
let cardTemplate = document.getElementById("cardTemplate")


let items = [

    {
        imgSrc: "../imgs/img-cinnamon.png",
        title:"Cinnamon",
        price:"$18.00",
        desc:"abcdefg"
    },

    {
        imgSrc: "../imgs/img-cheesecake.png",
        title:"Cheesecake",
        price:"$20.99",
        desc:"Sweetness beyond Imagination"
    }

]

displayItems();

function displayItems(){

    items.forEach( obj =>{
        let clone = cardTemplate.content.cloneNode(true)
    
        let itemImg = clone.getElementById("itemImg")
        itemImg.src = obj.imgSrc;
    
        
        let itemName = clone.getElementById("itemName")
        itemName.innerText = obj.title;
    
            
        let itemPrice = clone.getElementById("itemPrice")
        itemPrice.innerText = obj.price;
    
        
        let itemDesc = clone.getElementById("itemDesc")
        itemDesc.innerText = obj.desc;
    
    
        contentContainer.appendChild(clone)
    })
        
}


    





