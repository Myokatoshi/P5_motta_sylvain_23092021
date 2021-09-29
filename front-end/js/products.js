(async function() {
    const articles = await getArticles()

    for (article of articles) {
        displayArticles(article)
    }
})()

const buttonElement = document.getElementById('btn-oriteddies');


buttonElement.addEventListener('click', function (event) {
    var articles = document.getElementsByClassName("article");
    for (var i =0; i < articles.length; i+=1) {
        articles[i].style.display = "flex";
    } 
    document.getElementById("teddy_imageUrl").src = new URL("http://localhost:3000/images/teddy_1.jpg");
    document.getElementById("teddy_name").innerHTML = "Norbert";
    document.getElementById("teddy_description").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    document.getElementById("teddy_price").innerHTML = "2900";  
});

function getArticles() {
    return fetch("http://localhost:3000/api/teddies")
    .then(function(httpbodyResponse) {
        console.log(httpbodyResponse)
        return httpbodyResponse.json()
    })
    .then(function(articles) {
        return articles
    })
    .catch(function(error) {
        alert(error)
    })
}

function displayArticles(article) {
    const templateElt = document.getElementById("teddy_article")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("teddy_name").textContent = article.name
    cloneElt.getElementById("teddy_description").textContent = article.description
    cloneElt.getElementById("teddy_price").textContent = article.price

    document.getElementById("section_article").appendChild(cloneElt)
}
