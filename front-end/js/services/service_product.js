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

    const idForm = document.querySelector(".option_product");

    const choiceForm = idForm.value;

    const btnSendCart = document.querySelector(".btn-basket");
    

    btnSendCart.addEventListener("click", (event)=>{
        event.preventDefault();
    });

    /*let optionsProduct = {
        nameProduct = i.name,
        optionProduct = choiceForm,
        quantity = 1,
        prix = i.price/100 + "€",
    }
    console.log(optionsProduct);*/
}