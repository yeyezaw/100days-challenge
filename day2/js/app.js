$(document).ready(function(){
    //Hide spoiler
    $('.spoiler span').hide();
    //Add Button 
    $('.spoiler').append('<button>Reveal to click here !</button>');
    //When button is clicked,
    $('button').click(function(){
            //Show spoiler
            $('.spoiler span').show();
            //Remove Button
            $('button').remove();
    });
});