//Au chargement de la page on récupère l'API puis on exploite les données récuperées pour structurer la page.
window.onload = () => {
     // On appelle la fonction pour récuperer l'API.
    fetchInit().then((data) => {
        // Avec les données récuperées , on strucutre la page.
        bodyIndex(data);

    });    
}

