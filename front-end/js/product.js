//Au chargement de la page on récupère l'ID d'un objet séléctionné de l'API puis on exploite les données récuperées pour structurer la page.
window.onload = () => {
    //fonction pour récuperer l'ID de l'objet séléctionné.
    const queryStringUrlId = window.location.search;
    const urlSearchParams = new URLSearchParams(queryStringUrlId);
    const id = urlSearchParams.get("id");
    fetchById(id).then((i) => {
        //fonction pour afficher les éléments du produit séléctionné.
        bodyProduct(i);
                
    });
    //fonction pour récuperer les données de l'API.
    fetchInit().then((data) => {
        //fonction pour afficher les autres produits en suggestion.
        bodyWish(data, id);
    });  
}




//localStorage
/*let productSavedInLocalStorage = JSON.parse(localStorage.getItem("product"));

if(productSavedInLocalStorage) {}

else {
    productSavedInLocalStorage = [];
    productSavedInLocalStorage.push(colors_list_option);
    localStorage.setItem("product", JSON.stringify(productSavedInLocalStorage));
}*/