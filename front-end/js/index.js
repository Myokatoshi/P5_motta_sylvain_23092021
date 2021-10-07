window.onload = () => {
    fetch("http://localhost:3000/api/teddies")
    .then(reponse  => reponse.json())
    .then(data => {
        data.forEach((i, item) => {
            const main = document.getElementsByClassName("container"); 
            const section = document.getElementById("section_article");
            section.className = "section my-3";
            section.idName = "section_article";
            const article = document.createElement("article");
            article.className = "article my-3";
            const link = document.createElement("a");
            link.className = "product-link";
            link.href = "product.html?type=teddies&id=" + i._id;
            link.ariaLabel = "Page du produit";
            const img = document.createElement("img");
            img.className = "article_picture";
            img.src = i.imageUrl;
            img.alt = "ours en peluche " + i.name;
            const divInfos = document.createElement("div");
            divInfos.className = "article_infos";
            const h2Infos = document.createElement("h2");
            h2Infos.className = "teddy_name";
            h2Infos.textContent = i.name;
            const pDescription = document.createElement("p");
            pDescription.className = "teddy_description";
            pDescription.textContent = i.description;
            const pVariations = document.createElement("p");
            pVariations.className = "teddy_variations";
            pVariations.textContent = "Disponible en :";
            let colorsNumber = i.colors.length;
            const pPrice = document.createElement("p")
            pPrice.className = "teddy_price";
            pPrice.textContent = i.price/100 + "€";
            section.appendChild(article);
            article.appendChild(link);
            article.appendChild(img);
            article.appendChild(divInfos);
            divInfos.appendChild(h2Infos);
            divInfos.appendChild(pDescription);
            divInfos.appendChild(pVariations);
            i.colors.forEach((j, sitem) => {
                const colorsVariations = document.createElement("span");
                colorsVariations.textContent = " " + j;
                pVariations.appendChild(colorsVariations);
                if((colorsNumber-1) != sitem) {
                   const pVariationsBetween = document.createElement("span");
                   pVariationsBetween.textContent = " /";
                   pVariations.appendChild(pVariationsBetween);
                }       
            });
            divInfos.appendChild(pPrice);

            
        });

    });
}

