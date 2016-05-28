//Prepare 
//Problem: When clicked to img, it goes dead end 
//Solution: Created overlay modal to view each img 


//Plan 
$(document).ready(function(){
        // Variables
        var $overlay = $('<div id="overlay"></div>');  //create overlay 
        var $image = $('<img>'); //create image tag
        var $caption = $('<p></p>');
        
        //append overlay to body HTML
        $('body').append($overlay);
        //append image to overlay
        $overlay.append($image);
        //append caption to overlay
        $overlay.append($caption);
    
        //When 'a' tag clicked, show overlay 
        $('#imageGallery a').click(function(event){
                 //prevent browser default dead end 
                 event.preventDefault();
                //select img location
                var $imgDir = $(this).attr('href');
                //add image to overlay 
                $image.attr('src', $imgDir);
                //show overlay 
                $overlay.show();
                //Caption 
               var $captionText = $(this).children($image).attr('alt');
                $caption.text($captionText);
        });
           

        //When clicked overlay, hide it
        $overlay.click(function(){
                $(this).hide();
        });
    
});
