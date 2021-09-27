(async function() {
    const articles = await getArticles()

    for (article of articles) {
        displayArticle(article)
    }
})()

function getarticles() {
    return fectch("http://localhost:3000/api/teddies")
    .then(function(httpbodyResponse) {
        return httpbodyResponse.json()
    })
    .then(function(articles) {
        return articles
    })
    .catch(function(error) {
        alert(error)
    })
}

function displayArticle(article) {
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("blog__name").textContent = article.name
    cloneElt.getElementById("blog__price").textContent = article.price

    document.getElementById("main").appendChild(cloneElt)
}
