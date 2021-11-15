const orderId = localStorage.getItem("orderId");

const totalPrice = localStorage.getItem("totalPrice");

const positionOrderConfirm = document.querySelector("#section_order");

const bodyOrderConfirm = `
<div class="recap_order text-center m-auto my-5 p-4">
            <h1 class="pb-1">Récapitulatif de votre commande</h1>
            <p class="text-confirm pb-1">Votre commande a bien été confirmé !</p>
            <p class="font-text">Numéro de commande: <strong>${orderId}</strong> <br> Montant de la commande: <strong>${totalPrice}</strong> € <br>
            Nous vous remercions pour votre achat et à très bientot sur Orinoco.</p>        
</div>
`;

positionOrderConfirm.innerHTML = bodyOrderConfirm;

function deleteKeyLocalStorage(key) {
    localStorage.removeItem(key);
};

deleteKeyLocalStorage("totalPrice");
deleteKeyLocalStorage("product");
deleteKeyLocalStorage("orderId");

if(orderId == null || totalPrice == null) {
window.location.href ="index.html";
}
