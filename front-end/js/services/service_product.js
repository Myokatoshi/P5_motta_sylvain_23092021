/**
 * function permettant de creer une partie de la structure du body de la page product
 * @param {*} i 
 */
function bodyProduct(i) {
    const block_product = document.getElementById("block_product");
    const block_product_picture = this.createImgWithClass("block_product_picture teddy_picture col-12");
    const block_content = document.getElementById("block_content");
    const teddy_name = this.createH1WithClass("teddy_name text-center");
    const teddy_description = this.createPWithClass("teddy_description text-center");
    const colors_list = document.getElementById("colors_list");
    const teddy_price = this.createPWithClass("teddy_price");

    i.colors.forEach((c, color_choice) => {
        const colors_list_option = document.createElement("option");
        colors_list_option.className = "option_product";
        colors_list_option.textContent = c;
        colors_list.appendChild(colors_list_option);    
    });

    block_product_picture.src = i.imageUrl;
    block_product_picture.alt= "ours en peluche " + i.name; 
    block_product_picture.title= "ours en peluche " + i.name;
    teddy_name.textContent = i.name;
    teddy_description.textContent = i.description;
    teddy_price.textContent = "Prix : " + i.price/100 + "€"; 

    block_product.appendChild(block_product_picture);
    block_content.appendChild(teddy_name);
    block_content.appendChild(teddy_description);
    block_content.appendChild(teddy_price);   
}

//utilisation unique du var pour pouvoir réutiliser mon élément à 3 endroits du fichier
var sameProductLine;

/**
 * fonction permettant d'ajouter au panier un article avec la couleur et la quantité choisies
 * @param {*} i 
 */
function addProductAtCart(i) {
    const colorForm = document.querySelector("#colors_list");
    const quantityForm = document.querySelector("#quantity_options");
    const btnSendCart = document.querySelector("#btn-basket");

    btnSendCart.addEventListener("click", (event)=>{
    event.preventDefault();

    const choiceColorForm = colorForm.value;
    const choiceQuantityForm = parseInt(quantityForm.value);
    sameProductLine = choiceQuantityForm;

    let optionsProduct = {
        colors: choiceColorForm,
        _id: i._id,
        name:  i.name,
        price: i.price/100,
        imageUrl: i.imageUrl,
        description: i.description,
        quantity: choiceQuantityForm,
        totalPriceOfSameProduct: (i.price * sameProductLine)/100,
    }
     
    //localStorage
    let productSavedInLocalStorage = JSON.parse(localStorage.getItem("product"));
    

    const popupConfirmation = () => {
        if(window.confirm(`${i.name} ${choiceColorForm} a bien été ajouté au panier.
        Cliquer sur OK pour aller au panier ou sur ANNULER pour continuer ces achats.`)){
            window.location.href = "cart.html";
        }
        else{
            window.location.href = "index.html";
        }
    }

    const addProductLocalStorage = () => {
        productSavedInLocalStorage.push(optionsProduct);
        localStorage.setItem("product", JSON.stringify(productSavedInLocalStorage));
    }


    if(productSavedInLocalStorage) {
        let result;
        productSavedInLocalStorage.filter((productFilter) => {
            if (productFilter.colors == choiceColorForm && productFilter._id == i._id) {

                return result = productFilter;
                
            }
        })
        if(result) {
            sameProductLine = result.quantity += choiceQuantityForm;
            result.totalPriceOfSameProduct = (i.price * sameProductLine)/100;
            localStorage.setItem('product', JSON.stringify(productSavedInLocalStorage));
            popupConfirmation();
        }

        else if(choiceQuantityForm >= 1 && choiceQuantityForm <= 10) {

            addProductLocalStorage();
            popupConfirmation();
            
        }

        else {
            alert("Oups ! La valeur de la quantité rentrée semble erronée ou manquante. Elle doit etre comprise entre 1 à 10");
            
        }
        
    }    

    else if(choiceQuantityForm >= 1 && choiceQuantityForm <= 10) {

        productSavedInLocalStorage = [];
        addProductLocalStorage();
        popupConfirmation();
    }

    else{
        alert("Oups ! La valeur de la quantité rentrée semble erronée ou manquante. Elle doit etre comprise entre 1 à 10");
    }
    
    });
}
