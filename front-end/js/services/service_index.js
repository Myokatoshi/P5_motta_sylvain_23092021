    // fonction permettant de creer la structure de la page en utilisant des données de l'API.
    /**
     * function permettant de creer la structure du body de la page index
     * @param {*} data 
     */
    function bodyIndex(data) {
        data.forEach((i, item) => {           
            const section = document.getElementById("section_article");
            const article = this.createArticleWithClass("article my-3");
            const link = this.createAWithClass("product-link");
            const img = this.createImgWithClass("article_picture");
            const divInfos = this.createDivWithClass("article_infos");
            const h2Infos = this.createH2WithClass("teddy_name");
            const pDescription = this.createPWithClass("teddy_description");
            const pVariations = this.createPWithClass("teddy_variations");
            let colorsNumber = i.colors.length;
            const pPrice = this.createPWithClass("teddy_price");
            
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

            link.href = "product.html?type=teddies&id=" + i._id;
            img.src = i.imageUrl;
            img.alt = "ours en peluche " + i.name;
            img.title = "ours en peluche " + i.name;
            h2Infos.textContent = i.name;
            pDescription.textContent = i.description;
            pVariations.textContent = "Disponible en :" + pVariations.textContent;
            pPrice.textContent = i.price/100 + "€";

            section.appendChild(article);
            article.appendChild(link);
            article.appendChild(img);
            article.appendChild(divInfos);
            divInfos.appendChild(h2Infos);
            divInfos.appendChild(pDescription);
            divInfos.appendChild(pVariations);
            divInfos.appendChild(pPrice);
        });
        
        
    }    