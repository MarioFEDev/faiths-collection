

function clearMemory() {
    localStorage.removeItem('addedProductsObj')
    localStorage.removeItem('addedProducts')
    localStorage.removeItem('BODY')
}


let productsInCart = JSON.parse(localStorage.getItem('addedProductsObj')) || {};
let productsArray = JSON.parse(localStorage.getItem('addedProducts')) || [];




function cartFunc(button){
    const numberOfProducts = Object.keys(productsInCart).length;
    const productDiv = button.closest('.product');
    const productName = productDiv.querySelector('.name').textContent;
    const productPrice = productDiv.querySelector('.pricing').textContent;
    const productPic = productDiv.querySelector('.imgcon').innerHTML;
    let ProdNo = (numberOfProducts + 1)
    

    if(button.innerText === "Add To Cart"){
        button.innerText = "Remove From Cart"
        createProductObject(ProdNo, productName, productPrice, productPic)
        action = true 
    }else if(button.innerText ===  "Remove From Cart"){
        button.innerText = "Add To Cart"
        removeProductByName(productName)
        action = false   
    }

    console.log(productsInCart)
        console.log(productsArray)
    saveCartInArray()
}

function removeProductByName(productName) {
    console.log(productsInCart)
    console.log(productsArray)
    for (let key in productsInCart) {
        if (productsInCart[key].name === productName) {
            delete productsInCart[key];
            return;
        }
    }
    saveCartInArray()
}

function createProductObject(identifier, name, price, imageHTML) {
    console.log(productsInCart)
    console.log(productsArray)
    productsInCart[identifier] = {
        name: name,
        price: price,
        image: imageHTML
    };
}

function saveCartInArray(){
    productsArray = Object.values(productsInCart)
    console.log(productsArray.length)
    cartNo.innerText = productsArray.length
    saveTheSavables()
}







