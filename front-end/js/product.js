//Au chargement de la page on récupère l'ID d'un objet séléctionné de l'API puis on exploite les données récuperées pour structurer la page.
window.onload = () => {
    //fonction pour récuperer l'ID de l'objet séléctionné.
    const queryStringUrlId = window.location.search;
    const urlSearchParams = new URLSearchParams(queryStringUrlId);
    const id = urlSearchParams.get("id");
    fetchById(id).then((i) => {
        //fonction pour afficher les éléments du produit séléctionné.
        bodyProduct(i);
        addProductAtCart(i);
                
    });
    //fonction pour récuperer les données de l'API pour le carousel optionnel//
    /*fetchInit().then((data) => {
        //fonction pour afficher les autres produits en suggestion.
        bodyWish(data, id);
    });*/  
}




