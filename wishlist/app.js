const form = document.querySelector("form")
const nameInp = document.querySelector("#name")
const brandInp = document.querySelector("#brand")
const priceInp = document.querySelector("#price")
const categoryInp = document.querySelector("#category")
const tbody = document.querySelector("tbody")
const addbutton = document.querySelector("#addbutton")

let id = 0;
let products = [];
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    products.push({
        name: nameInp.value,
        brand: brandInp.value,
        category: categoryInp.value,
        price = priceInp.value
    })


    container.innerHTML = ""
    users.map((item) => {
        const productCard = document.createElement("div")
        productCard.classList.add("card")
        productCard.style.width = "200px"

        const productDesc = document.createElement("div")
        productDesc.classList.add("card-body")

        const productName = document.createElement("name")
        productName.classList.add("card-title")
        productName.innerText = item.name

        const productBrand = document.createElement("brand")
        productBrand.classList.add("card-title")
        productBrand.innerText = item.brand

        const productCategory = document.createElement("category")
        productCategory.classList.add("card-title")
        productCategory.innerText = item.category
        
        const productPrice = document.createElement("price")
        productPrice.classList.add("card-title")
        productPrice.innerText = item.price

        productDesc.append(productName, productBrand, productCategory, productPrice )
        productCard.append(productDesc)
        container.appendChild(productCard)
    })

 
      })