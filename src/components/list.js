const list = [
  {
    "name": "Blue couch 1",
    "price": "1115.99",
    "priceFormatted": "1.115,99 €",
    "imagePath": "../assets/images/image\ 1.png"
  },
  {
    "name": "Yellow couch",
    "price": "1000.99",
    "priceFormatted": "1.000,99 €",
    "imagePath": "../assets/images/image\ 3.png"
  },
  {
    "name": "Brown couch",
    "price": "1220.95",
    "priceFormatted": "1.220,95 €",
    "imagePath": "../assets/images/image\ 5.png"
  },
  {
    "name": "Grey couch 1",
    "price": "1500.90",
    "priceFormatted": "1.500,90 €",
    "imagePath": "../assets/images/image\ 7.png"
  },
  {
    "name": "Blue couch 2",
    "price": "900",
    "priceFormatted": "900 €",
    "imagePath": "../assets/images/image\ 8.png"
  },
  {
    "name": "Grey couch 1",
    "price": "990",
    "priceFormatted": "990 €",
    "imagePath": "../assets/images/image\ 9.png"
  },
]

function insertName(id, position) {

  return document.getElementById(id).innerHTML = list[position].name
}
function insertPrice(id, position) {

  return document.getElementById(id).innerHTML = list[position].priceFormatted
}
function setImage(id, position) {

  return document.getElementById(id).style.backgroundImage(list[position].imagePath)
}
function addToCart(id, position, id2, id3, id4, id5) {

  let actualPrice = list[position].price 
  let total = parseFloat(actualPrice)
  document.getElementById(id4).style.display = "none";
  document.getElementById(id3).style.display = "none";
  document.getElementById(id2).style.display = "none";
  document.getElementById(id5).style.display = "block";
  return document.getElementById(id).innerHTML = total + '  €'
}
function loadSpiner() {
  setTimeout(() => {
    document.getElementById("search").style.display = "block";
    document.getElementById("cards").style.display = "block";
    document.getElementById("spiner").style.display = "none";
  }, 3000)
  document.getElementById("search").style.display = "none";
  document.getElementById("cards").style.display = "none";
  document.getElementById("spiner").style.display = "block";
}

function removeFromCart(id, id2, id3, id4, id5) {
  document.getElementById(id4).style.display = "block";
  document.getElementById(id3).style.display = "block";
  document.getElementById(id2).style.display = "block";
  document.getElementById(id5).style.display = "none";
  return document.getElementById(id).innerHTML = "0,00 €"
}

function filterProduct() {
  var element = document.getElementById('input-search').value
  document.getElementById("cards").style.display = "none";
  document.getElementById("element-serached").style.display = "block"
  return document.getElementById("element-serached").innerHTML = 'No Results For:<br>' + element;
}

