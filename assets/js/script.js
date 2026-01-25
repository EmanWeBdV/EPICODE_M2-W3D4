function modTitle(){
    let titlePage = document.querySelector("h1")
    titlePage.textContent = "WoooooooW"
}

function modBackground(){
    let backgroundChange = document.querySelector("body")
    backgroundChange.style.backgroundColor = "violet"
}

function modAddress(){
    let newAddress = document.getElementById("addressShop")
    newAddress.textContent = "Via Milano, 1 - 20123 Milano (MI)"
}

function addStyleLink(){
    let containerLink = document.querySelectorAll(".linkProduct")
    for (let i = 0; i < containerLink.length; i++){
        containerLink[i].classList.add("containerLink")
    }
    let linkAmazon = document.querySelectorAll("a")
    console.log(linkAmazon)
    for (let i = 0; i < linkAmazon.length; i++){
        linkAmazon[i].classList.add("styleLinkAmazon")
    }
}

function hideImage(){
    let imageProductHidden = document.querySelectorAll("img")
    for (let i = 0; i < imageProductHidden.length; i++)
        imageProductHidden[i].style.display = "none"
}

function magicRandomColor(){
    let allPrices = document.querySelectorAll(".priceProduct")
    for (let i = 0; i < allPrices.length; i++){
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        allPrices[i].style.color = randomColor
    }
        
}