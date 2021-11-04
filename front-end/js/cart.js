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
        tableCartProduct = tableCartProduct + `
        <tr class="bg-white border text-center">
            <td>${productSavedInLocalStorage[k].nameProduct} ${productSavedInLocalStorage[k].optionProduct}</td>
            <td class="justify-content-td"><button type="submit" id="btn-less" class="btn-quantity-choice mx-1">-</button>${productSavedInLocalStorage[k].quantity}<button type="submit" id="btn-more" class="btn-quantity-choice mx-1">+</button></td>
            <td>${productSavedInLocalStorage[k].price} €</td>
            <td>${productSavedInLocalStorage[k].totalPriceOfSameProduct} €</td>
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
        const priceProductInCart = productSavedInLocalStorage[tp].totalPriceOfSameProduct;
        
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

    class Form {
        constructor(){
            this.firstName = document.querySelector("#firstName").value;
            this.lastName = document.querySelector("#lastName").value;
            this.adress = document.querySelector("#adress").value;
            this.city = document.querySelector("#city").value;
            this.email = document.querySelector("#email").value;
            
        }
    }

    const formValues = new Form();

    console.log(formValues);

    const regExFirstNameLastName = (value) => {
        return /^[A-Za-z]{3,20}$/.test(value);
    }

    const regExCity = (value) => {
        return /^[A-Za-z]{1}[A-Za-z -]*$/.test(value);
    }

    const regExAdress = (value) => {
        return /^[0-9]{1}[0-9A-Za-z -]*$/.test(value);
    }

    const regExEmail = (value) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }

    function firstNameControlForm() {
        const checkFirstNameForm = formValues.firstName;

        if(regExFirstNameLastName(checkFirstNameForm)) {
            
            return true;
        }
        else {
            
            alert("les chiffres et symboles ne sont pas autorisés dans le champ 'prénom'. Ce champ doit contenir entre 3 et 20 caractères.");
            return false;
        }

    }

    function lastNameControlForm() {
        const checkLastNameForm = formValues.lastName;

        if(regExFirstNameLastName(checkLastNameForm)) {
            
            return true;
        }
        else {
            
            alert("les chiffres et symboles ne sont pas autorisés dans le champ 'nom'. Ce champ doit contenir entre 3 et 20 caractères.");
            return false;
        }

    }

    function adressControlForm() {
        const checkAdressForm = formValues.adress;

        if(regExAdress(checkAdressForm)) {
            
            return true;
        }
        else {
            
            alert("les symboles ne sont pas autorisés dans le champ 'adresse'(Les tirets et espaces sont acceptés).");
            return false;
        }

    }

    function cityControlForm() {
        const checkCityForm = formValues.city;

        if(regExCity(checkCityForm)) {
            
            return true;
        }
        else {
            
            alert("les chiffres et symboles ne sont pas autorisés dans le champ 'ville'(Les tirets et espaces sont acceptés).");
            return false;
        }

    }

    function emailControlForm() {
        const checkEmailForm = formValues.email;

        if(regExEmail(checkEmailForm)) {
            
            return true;
        }
        else {
            
            alert("les symboles spéciaux ne sont pas autorisés dans le champ 'email'. L'email doit contenir un @ ainsi qu'un nom de domaine.");
            return false;
        }

    }

    if(firstNameControlForm() && lastNameControlForm() && cityControlForm() && adressControlForm() && emailControlForm()) {
        localStorage.setItem("formValues", JSON.stringify(formValues));
    }
    else {
        alert("Veuillez bien remplir le formulaire");
    }

    const formToSend = {
        productSavedInLocalStorage,
        formValues,
    }

    console.log(formToSend);

    /*const promiseSaveOnServer = fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        body: JSON.stringify(formToSend),
        headers: {
          "Content-Type": "application/json",  
        },
    });*/

    const asyncPostCall = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/teddies/order', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify(formToSend)
             });
             const data = await response.json();
          // enter you logic when the fetch is successful
             console.log(data);
           } catch(error) {
         // enter your logic for when there is an error (ex. error toast)

              console.log(error)
             } 
        }

    asyncPostCall();
});

const dataLocalStorage = localStorage.getItem("formValues");

const dataLocalStorageObject = JSON.parse(dataLocalStorage);

function automaticSavingFillingsFormSinceLocalStorage(inputSave) {
    document.querySelector(`#${inputSave}`).value = dataLocalStorageObject[inputSave];
};

automaticSavingFillingsFormSinceLocalStorage("firstName");
automaticSavingFillingsFormSinceLocalStorage("lastName");
automaticSavingFillingsFormSinceLocalStorage("adress");
automaticSavingFillingsFormSinceLocalStorage("city");
automaticSavingFillingsFormSinceLocalStorage("email");

 