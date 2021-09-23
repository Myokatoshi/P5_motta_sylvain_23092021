(async function() {
    const articles = await getArticles()

    for (article of articles) {
        displayArticle(article)
    }
})()

function getarticles() {
    return fectch()
    .then(function(httpbodyResponse) {
        return httpbodyResponse.json()
    })
}
