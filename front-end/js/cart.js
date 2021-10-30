function emptyCart() {
    if(productSavedInLocalStorage === null || productSavedInLocalStorage == 0) {
        return true;
    }
    else {
        return false;
    }
}

let productSavedInLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productSavedInLocalStorage);

const table_cart = document.getElementById("table_cart");
const h2Cart = document.getElementById("title_cart");
const table_body = document.getElementById("table_body");
const table_foot = document.getElementById("table_foot");
const th_btn_delete_cart = document.getElementById("hidden-btn");
const content_form = document.getElementById("content-form");

let tableCartProduct = [];

if(productSavedInLocalStorage === null || productSavedInLocalStorage == 0) {
    const emptyCart = `
        <div class="content-empty-cart">
            <h2>Le panier est vide !</h2>
            </div>
    `;
    th_btn_delete_cart.style.display = "none";
    content_form.style.display = "none";
    h2Cart.innerHTML = emptyCart;
} 
else {
    for(k = 0; k < productSavedInLocalStorage.length; k++) {
        let totalPriceOfSameProduct = productSavedInLocalStorage[k].quantity * productSavedInLocalStorage[k].price;
        tableCartProduct = tableCartProduct + `
        <tr class="bg-white border text-center">
            <td>${productSavedInLocalStorage[k].nameProduct} ${productSavedInLocalStorage[k].optionProduct}</td>
            <td class="justify-content-td"><button type="submit" id="btn-less" class="btn-quantity-choice mx-1">-</button>${productSavedInLocalStorage[k].quantity}<button type="submit" id="btn-more" class="btn-quantity-choice mx-1">+</button></td>
            <td>${productSavedInLocalStorage[k].price} €</td>
            <td>${totalPriceOfSameProduct} €</td>
            <td><a type="submit" class="btn-trash"><i class="trash-button fas fa-trash-alt"></i></a></td>
        </tr>
        `;
    }
    if(k === productSavedInLocalStorage.length) {
        table_body.innerHTML = tableCartProduct;
    }    
}

let btn_delete = document.querySelectorAll(".btn-trash");
btn_delete.forEach((btn, d) => {
    btn.addEventListener('click', () => {
    deleteItemSelected(d);
    alert("Ce produit a bien été supprimé du panier.");
    window.location.href = "cart.html";    
    });
    
});

function deleteItemSelected(index) {
    productSavedInLocalStorage.splice(index, 1);
    localStorage.setItem('product', JSON.stringify(productSavedInLocalStorage));

    if (productSavedInLocalStorage.length === 0) {
        localStorage.removeItem('product');
    }
    
}

let btn_delete_cart = document.querySelector("#btn-delete-cart");

btn_delete_cart.addEventListener('click', (e) => {
    e.preventDefault;
    localStorage.removeItem("product");
    alert("Le panier a bien été vidé !");
    window.location.href = "cart.html";    
    });
    

let arrayTotalPrice = [];

if(emptyCart() === false) {
    for (let tp = 0; tp < productSavedInLocalStorage.length; tp++) {
        
        let priceProductInCart = productSavedInLocalStorage[tp].totalPriceOfSameProduct;
        
        arrayTotalPrice.push(priceProductInCart);

        console.log(arrayTotalPrice);
    }
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = arrayTotalPrice.reduce(reducer, 0);
console.log(totalPrice);
const displayTotalPrice = `
    <tr class="bg-white border text-center">
        <th class="py-2 col-5">Total :</th>
        <th class="py-2 col-2"></th>
        <th class="py-2 col-2"></th>
        <th class="py-2 col-2">${totalPrice} €</th>
        <th class="py-2 col-1"></th>
    </tr>
    `;
table_foot.innerHTML = displayTotalPrice;

    
let btn_less = document.querySelectorAll("#btn-less");

btn_less.forEach((less, down) => {
    less.addEventListener('click', () => {
        decreaseQuantitySelected(down);
        window.location.href = "cart.html";    
    });
    console.log(btn_less);
});

function decreaseQuantitySelected() {
    for(dec = 0; dec < productSavedInLocalStorage.length; dec++) {
    let decreaseQuantity = productSavedInLocalStorage[dec].quantity--;
    let decreasePrice = productSavedInLocalStorage[dec].totalPriceOfSameProduct -= productSavedInLocalStorage[dec].price;
    localStorage.setItem('product', JSON.stringify(productSavedInLocalStorage));
    if (productSavedInLocalStorage[dec].quantity === 0) {
        localStorage.removeItem('product');
        alert("Ce produit a bien été supprimé du panier.");
    }
    return decreaseQuantity;
    return decreasePrice; 
    }   
}

let btn_more = document.querySelectorAll("#btn-more");

btn_more.forEach((more, up) => {
    more.addEventListener('click', () => {
        increaseQuantitySelected(up);
        window.location.href = "cart.html";    
    });
    console.log(btn_more);
});

function increaseQuantitySelected() {
    for(inc = 0; inc < productSavedInLocalStorage.length; inc++) {
    let increaseQuantity = productSavedInLocalStorage[inc].quantity++;
    let increasePrice = productSavedInLocalStorage[inc].totalPriceOfSameProduct += productSavedInLocalStorage[inc].price;
    localStorage.setItem('product', JSON.stringify(productSavedInLocalStorage));
    if (productSavedInLocalStorage[inc].quantity === 0) {
        localStorage.removeItem('product');
    }
    return increaseQuantity;
    return increasePrice; 
    }   
}

const btn_send_form = document.querySelector("#btn_order");

btn_send_form.addEventListener("click", (bsf) => {
    bsf.preventDefault();

    const formValues = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        adress: document.querySelector("#adress").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value,
    }

    console.log(formValues);

    localStorage.setItem("formValues", JSON.stringify(formValues));

    const formToSend = {
        productSavedInLocalStorage,
        formValues,
    }

    
})