function fetchInit() {
    let myfetchInit = fetch("http://localhost:3000/api/teddies")
    .then(reponse  => reponse.json())
    .catch((error) => {
        alert("la connexion avec l'API n'a pas pu se faire. Verifiez la connexion du serveur sur le terminal avec la commande 'node server'.")
    })
    return myfetchInit;
}    