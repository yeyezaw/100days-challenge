$(document).ready(function(){
    $('button').click(function(){
        $('button').removeClass("selected"); //remove "selected" button (2)
        $(this).addClass("selected"); //add .selected class (1)
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; //URL
        var animal = $(this).text();//eg. dog, cat , moose button text 
        var flickrOptions = {
            tags : animal,
            format : 'json'
        }; //data
        function displayPhotos(data){
            var photoHTML = '<ul>';
            $.each(data.items, function(i,photo){
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="'+ photo.link +'" class="image">';
                photoHTML += '<img src="'+ photo.media.m +'"></a></li>';
            });
            photoHTML += '</ul>';
            $('#photos').html(photoHTML); 
        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos);//jQuery JSON method (URL,data,callback)
    });

});