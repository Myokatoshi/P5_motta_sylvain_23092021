let productSavedInLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productSavedInLocalStorage);

const table_cart = document.getElementById("table_cart");
const h2Cart = document.getElementById("title_cart");
const table_body = document.getElementById("table_body");
const table_foot = document.getElementById("table_foot");

let tableCartProduct = [];

if(productSavedInLocalStorage === null || productSavedInLocalStorage == 0) {
    const emptyCart = `
        <div class="content-empty-cart">
            <h2>Le panier est vide !</h2>
            </div>
    `;
    h2Cart.innerHTML = emptyCart;
} 
else {
    for(k = 0; k < productSavedInLocalStorage.length; k++) {
        tableCartProduct = tableCartProduct + `
        <tr class="bg-white border text-center">
            <td>${productSavedInLocalStorage[k].nameProduct} ${productSavedInLocalStorage[k].optionProduct}</td>
            <td>${productSavedInLocalStorage[k].quantity}</td>
            <td>${productSavedInLocalStorage[k].price} €</td>
            <td><button class=btn-trash><i class="trash-button fas fa-trash-alt"></i></button></td>
        </tr>
        `;
    }
    if(k === productSavedInLocalStorage.length) {
        table_body.innerHTML = tableCartProduct;
        /*const totalPrice = `
        <tr class="bg-white border">
            <th class="py-2 col-4">Total :</th>
            <th class="py-2 col-4">Total :</th>
            <th class="py-2 col-4">${productSavedInLocalStorage[k].price.length}</th>
        </tr>
        `;
        table_foot.innerHTML = totalPrice;*/
    }    
}

let btn_delete =document.querySelectorAll(".btn-trash");
btn_delete.forEach((btn, d) => {
    btn.addEventListener('click', () => {
    deleteItemSelect(d);
    alert("Ce produit a bien été supprimé du panier");
    window.location.href = "cart.html";    
    });
    
});

function deleteItemSelect(index) {
    productSavedInLocalStorage.splice(index, 1);
    localStorage.setItem('product', JSON.stringify(productSavedInLocalStorage));

    if (productSavedInLocalStorage.length === 0) {
        localStorage.removeItem('product');
    }
    
}



/*for (let d = 0; d < btn_delete.length; d++) {
    btn_delete[d].addEventListener("click" , (event) => {
        event.preventDefault();

        let delete_id_selected = productSavedInLocalStorage[d].idProduct;
    })
}*/