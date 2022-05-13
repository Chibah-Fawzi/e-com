var names = ["chocolat", "cheese", "kda mena", "halal menthe", "kinder pingui", "Zitoune", "Mechoui f chbab", "Kebch", "Rolex"]
var prices = [12, 8, 7, 5, 15, 300, 4, 2, 1000]
var descriptions = ["aaaa", "bbb", "vvvv", "cccccc", "chocolat", "cheese", "kda mena", "halal menthe", "kinder pingui"]
var images = ['/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg']


var productList = []

var contenuHTML = ""

for (let i = 0; i < names.length; i++) {

    var product = {
        name: names[i],
        price: prices[i],
        description: descriptions[i],
        image: images[i]
    }

    productList.push(product)

    /*html */
    contenuHTML += `
    <div class='col'>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${product.image} width="200px" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <div class="d-flex flex-row-reverse align-items-center justify-content-between">
    <p>${product.price}$</p>
    <a href="#" class="btn btn-primary">Ajouter au panier</a>
  </div>
  </div>
  </div>
</div>
`
}

const productDiv = document.getElementById('products')

productDiv.innerHTML = contenuHTML