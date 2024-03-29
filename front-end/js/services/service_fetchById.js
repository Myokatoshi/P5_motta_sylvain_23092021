/**
 * fonction permettant de récuperer l'id du teddy séléctionné
 * @param {String} id 
 * @returns myfetchById // renvoi les données du teddy séléctionné de l'API grâce à son id
 */
function fetchById(id) {
    let myfetchById = fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(reponse  => reponse.json())
    .catch((error) => {
        alert("la connexion avec l'API n'a pas pu se faire. Verifiez la connexion du serveur sur le terminal avec la commande 'node server'.")
    })
    return myfetchById; 
}