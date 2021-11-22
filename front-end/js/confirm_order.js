//on creer des constantes en récuperant des données du localstorage

//le numéro de commande
const orderId = localStorage.getItem("orderId");

//le coût total de la commande
const totalPrice = localStorage.getItem("totalPrice");

const positionOrderConfirm = document.querySelector("#section_order");

//on cree la structure du block récapitulatif en intégrant les éléments crées ci-dessus
const bodyOrderConfirm = `
<div class="recap_order text-center m-auto my-5 p-4">
            <h1 class="pb-1">Récapitulatif de votre commande</h1>
            <p class="text-confirm pb-1">Votre commande a bien été confirmé !</p>
            <p class="font-text">Numéro de commande: <strong>${orderId}</strong> <br> Montant de la commande: <strong>${totalPrice}</strong> € <br>
            Nous vous remercions pour votre achat et à très bientot sur Orinoco.</p>        
</div>
`;

positionOrderConfirm.innerHTML = bodyOrderConfirm;



//au rechargement de la page, l'utilisateur est reconduit à la page index

if(orderId == null || totalPrice == null) {
    window.location.href ="index.html";
}
else {
    positionOrderConfirm.innerHTML = bodyOrderConfirm;
    //au chargement de la page on vide les éléments ci-dessous du localstorage
    deleteKeyLocalStorage("totalPrice");
    deleteKeyLocalStorage("product");
    deleteKeyLocalStorage("orderId");
}

/**
 * fonction permettant du supprimer des éléments du localstorage
 * @param {*} key 
 */
 function deleteKeyLocalStorage(key) {
    localStorage.removeItem(key);
};

