$('.oriteddies').on('click', function() {
    $('#section_article').html('Ca charge...');
    $.ajax({
        url: "http://localhost:3000/api/teddies",
        context: document.body
      }).done(function(data) {
        $('#section_article').html('');
        $.each(data, function(i, item) {
            $('#section_article').append('<article class="article my-3"></article>'); 
            $('#section_article article:last-child').append('<a class="product-link" href="customisation.html?type=teddies&id=' + item._id + '" aria-label="Page du produit"></a>');            
            $('#section_article article:last-child').append('<img src="' + item.imageUrl + '" class="article_picture teddy_imageUrl" alt="ours en peluche ' + item.name + '" title="ours en peluche ' + item.name + '"></img>'); 
            $('#section_article article:last-child').append('<div class="article_infos"></div>'); 
            $('#section_article article:last-child div.article_infos').append('<h2 class="teddy_name">' + item.name + '</h2>'); 
            $('#section_article article:last-child div.article_infos').append('<p class="teddy_description">' + item.description + '</p>'); 
            $('#section_article article:last-child div.article_infos').append('<p class="teddy_variations">Disponible en : </p>');
            $(item.colors).each(function(j, sitem){
                if(j > 0) $('#section_article article:last-child div.article_infos .teddy_variations').append(' / ');
                $('#section_article article:last-child div.article_infos .teddy_variations').append(sitem);
            });
            $('#section_article article:last-child div.article_infos').append('<p class="teddy_price">' + item.price + ' &euro;</p>'); 
          });
      });
});

