/**
 * fonction de suggestion des autres produits
 * @param {*} data 
 * @param {*} id 
 */
/*function bodyWish(data, id) {
    const row_wish = document.getElementById("row_wish");
        data.forEach((i, item) => {
            if(i._id != id) {
                const row_wish_block = this.createDivWithClass("row_wish_block col-3 p-2"); 
                const block_wish = this.createArticleWithClass("block_wish p-4");
                const productLink = this.createAWithClass("product-link");
                const block_wish_image = this.createImgWithClass("block_wish_image");
                const block_wish_title = this.createH3WithClass("block_wish_title text-center mt-2");

                productLink.href = "product.html?type=teddies&id=" + i._id;
                block_wish_image.src = i.imageUrl;
                block_wish_image.alt = "ours en peluche " + i.name;
                block_wish_image.title = "ours en peluche " + i.name;
                block_wish_title.textContent = i.name;

                row_wish.appendChild(row_wish_block);
                row_wish_block.appendChild(block_wish);
                block_wish.appendChild(productLink);
                block_wish.appendChild(block_wish_image);
                block_wish.appendChild(block_wish_title);
            }
        });
}*/