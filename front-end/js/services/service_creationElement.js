/**
 * 
 * @param (string) className
 * @returns (HTMLElement)
 */
 function createArticleWithClass(className) {
    let article = document.createElement('article');
    article.setAttribute('class', className);
    return article;
}

/**
 * 
 * @param (string) className
 * @returns (HTMLElement)
 */
function createDivWithClass(className) {
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

/**
 * 
 * @param (string) className
 * @returns (HTMLElement)
 */
 function createPWithClass(className) {
    let p = document.createElement('p');
    p.setAttribute('class', className);
    return p;
}

/**
 * 
 * @param (string) className
 * @returns (HTMLElement)
 */
 function createAWithClass(className) {
    let a = document.createElement('a');
    a.setAttribute('class', className);
    a.href = "product.html?type=teddies&id=" + i._id;
    a.ariaLabel = "Page du produit";
    return a;
}

/**
 * 
 * @param (string) className
 * @returns (HTMLElement)
 */
function createImgWithClass(className) {
    let img = document.createElement('img');
    img.setAttribute('class', className);
    img.src = i.imageUrl;
    img.alt = "ours en peluche " + i.name;
    img.title = "ours en peluche " + i.name;
    return img;
}

/**
 * 
 * @param (string) className
 * @returns (HTMLElement)
 */
 function createH2WithClass(className) {
    let h2 = document.createElement('h2');
    h2.setAttribute('class', className);
    h2.textContent = i.name;
    return h2;
}

/**
 * 
 * @param (string) className
 * @returns (HTMLElement)
 */
 function createH3WithClass(className) {
    let h3 = document.createElement('h3');
    h3.setAttribute('class', className);
    h3.textContent = i.name;
    return h3;
}
