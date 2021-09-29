const section = document.getElementById('section');
const articles = document.getElementsByClassName('article');
const teddyInfos = document.getElementsByClassName('article_infos')
const buttonElement = document.getElementById('btn-oriteddies');
let requestURL ='http://localhost:3000/api/teddies';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let articles = request.response;
    displayArticles(articles);
}

buttonElement.addEventListener('click', function (event) {
var article = document.getElementsByClassName("article");
    for (var i =0; i < article.length; i+=1) {
        article[i].style.display = "flex";
    }
})     

function displayArticles(jsonObj) {
    let teddyArticle = document.createElement('article');
    let teddyDiv = document.createElement('div');
    let teddyImg = document.createElement('img');
    let teddyName = document.createElement('h2');
    let teddyDescription = document.createElement('p');
    let teddyPrice = document.createElement('p');
    
    
    teddyImg.src = jsonObj['imageUrl'];
    teddyName.textContent = jsonObj['name'];
    teddyDescription.textContent = jsonObj['description'];
    teddyPrice.textContent = jsonObj['price'] + '€';

    section.appendChild(teddyArticle);
    articles.appendChild(teddyImg);
    articles.appendChild(teddyDiv);
    teddyInfos.appendChild(teddyName);
    teddyInfos.appendChild(teddyDescription);
    teddyInfos.appendChild(teddyPrice);

}

