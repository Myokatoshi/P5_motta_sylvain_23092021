window.onload = () => {
    const queryStringUrlId = window.location.search;
    const urlSearchParams = new URLSearchParams(queryStringUrlId);
    const id = urlSearchParams.get("id");
    fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(reponse  => reponse.json())
    .then(data => {
        const block_product = document.getElementById("block_product");
        const block_product_picture = document.createElement("img");
        block_product_picture.className = "block_product_picture teddy_picture col-12";
        block_product_picture.src = data.imageUrl;
        block_product_picture.alt= "ours en peluche " + data.name; 
        block_product_picture.title= "ours en peluche " + data.name;
        const block_content = document.getElementById("block_content");
        const teddy_name = document.createElement("h1");
        teddy_name.className = "teddy_name text-center";
        teddy_name.textContent = data.name;
        const teddy_description = document.createElement("p");
        teddy_description.className = "teddy_description text-center";
        teddy_description.textContent = data.description;
        const colors_list = document.getElementById("colors_list");
        data.colors.forEach((c, color_choice) => {
            const colors_list_option = document.createElement("option");
            colors_list_option.textContent = c;
            colors_list.appendChild(colors_list_option);    
        });
        const quantity_list = document.getElementById("quantity_list");
        /*data.forEach((q, quantity_of) => {
            const quantity_list_option = document.createElement("option");
            quantity_list_option.textContent = 
        })*/
        const teddy_price = document.createElement("p");
        teddy_price.className = "teddy_price";
        teddy_price.textContent = "Prix : " + data.price/100 + "€"; 

        block_product.appendChild(block_product_picture);
        block_content.appendChild(teddy_name);
        block_content.appendChild(teddy_description);
        block_content.appendChild(teddy_price);
                
    });
    fetch("http://localhost:3000/api/teddies/")
    .then(reponse => reponse.json())
    .then(data => {
        const row_wish = document.getElementById("row_wish");
        data.forEach((i, item) => {
            if(i._id != id) {
                const row_wish_block = document.createElement("div");
                row_wish_block.className = "row_wish_block col-3 p-2";
                const block_wish = document.createElement("article");
                block_wish.className = "block_wish p-4";
                const productLink = document.createElement("a");
                productLink.className = "product-link";
                productLink.href = "product.html?type=teddies&id=" + i._id;
                const block_wish_image = document.createElement("img");
                block_wish_image.className = "block_wish_image";
                block_wish_image.src = i.imageUrl;
                block_wish_image.alt = "ours en peluche " + i.name;
                block_wish_image.title = "ours en peluche " + i.name;
                const block_wish_title = document.createElement("h3");
                block_wish_title.className = "block_wish_title text-center";
                block_wish_title.textContent = i.name;

                row_wish.appendChild(row_wish_block);
                row_wish_block.appendChild(block_wish);
                block_wish.appendChild(productLink);
                block_wish.appendChild(block_wish_image);
                block_wish.appendChild(block_wish_title);
            }
        });
    });
    
    
}