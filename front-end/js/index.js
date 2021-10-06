document.onload = () => {
    fetch("http://localhost:3000/api/teddies")
    .then(reponse  => reponse.json())
    .then(data => {
        //data.forEach((i, item) => {
            const main = document.getElementById("container"); 
            const section = document.createElement("section");
            /*section.class = "section my-3";
            section.id = "section_article";
            const article = document.createElement("article");
            article.class = "article my-3";
            const link = document.createElement("a");
            link.class = "product-link";
            link.href = "product.html?type=teddies&id=" + item._id;
            link.ariaLabel = "Page du produit";
            const img = document.createElement("img");
            img.class = "article_picture teddy_imageUrl";
            img.src = item.imageUrl;
            img.alt = "ours en peluche" + item.name;
            const divInfos = document.createElement("div");
            divInfos.class = "article_infos";
            const h2Infos = document.createElement("h2");
            h2Infos.class = "teddy_name";
            h2Infos.textContent = item.name;
            const pDescription = document.createElement("p");
            pDescription.class = "teddy_description";
            pDescription.textContent = item.description;
            const pVariations = document.createElement("p");
            pVariations.class = "teddy_variations";
            pVariations.textContent = "Disponible en : ";
            const pPrice = document.createElement("p")
            pPrice.class = "teddy_price";
            pPrice.textContent = item.price/100;*/

            main.appendChild(section);

        //});

    });
}

