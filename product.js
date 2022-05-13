var names = ["chocolat", "cheese", "kda mena", "halal menthe", "kinder pingui", "Zitoune", "Mechoui f chbab", "Kebch", "Rolex"]
var prices = [12, 8, 7, 5, 15, 300, 4, 2, 1000]
var descriptions = ["aaaa", "bbb", "vvvv", "cccccc", "chocolat", "cheese", "kda mena", "halal menthe", "kinder pingui"]
var images = ['/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg', '/img/image.jpg']


var productList = []

var contenuHTML = ""

for (let i = 0; i < names.length; i++) {

  var product = {
    id: i,
    name: names[i],
    price: prices[i],
    description: descriptions[i],
    image: images[i],
    quantity: 1
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
    <a onclick='AjouterAuPanier(${i})' href="#" class="btn btn-primary">Ajouter au panier</a>
  </div>
  </div>
  </div>
</div>
`
}
const productDiv = document.getElementById('products')
productDiv.innerHTML = contenuHTML


var contenuPanier = ""

var listePanier = []

function AjouterAuPanier(index) {
  var produitActuel = productList[index]

  var panierDiv = document.getElementById('cartItems')

  const found = listePanier.find((element) => element.id == produitActuel.id)

  if (found) {
    listePanier.map(produit => {
      if (produit.id == found.id) {
        produit.quantity++
        document.getElementById('quantity' + produit.id).innerHTML = produit.quantity
      }
    })
  } else {

    listePanier.push(produitActuel)

    /*html */

    contenuPanier += `
                            <tr id='product${produitActuel.id}'>
                                <td>${produitActuel.id}</td>
                                <td>${produitActuel.name}</td>
                                <td id='quantity${produitActuel.id}'>${produitActuel.quantity}</td>
                                <td>${produitActuel.price}</td>
                                <td><button onclick='deleteItem(${produitActuel.id})'>Delete</button></td>
                            </tr>
                            `

    panierDiv.innerHTML = contenuPanier
  }

}

function deleteItem(id) {
  listePanier.filter(produit => produit.id != id)
  document.getElementById('product' + id).remove()
}