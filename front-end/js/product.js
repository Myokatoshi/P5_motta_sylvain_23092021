$(document).ready(function() {
    let searchParams = new URLSearchParams(window.location.search)
    searchParams.has('id') 
    let id = searchParams.get('id')
    $.ajax({
        url: "http://localhost:3000/api/teddies/" + id,
        context: document.body
      }).done(function(data) {});

      
});
