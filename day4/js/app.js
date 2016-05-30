//Prepare 
//Problem : Not Mobile Friendly
//Solution : Make mobile friendly

//Plan 
$(document).ready(function(){
    //create select box
    var $select = $('<select></select>');
    //then append to menu 
    $('#menu').append($select);
    
    //select anchor 
    $('#menu a').each(function(){
         //create anchor tag 
         var $anchor = $(this);
        //create option tag 
        var $option = $('<option></option>');
        //deal with selected option ('a' of parent is 'li')
        if($anchor.parent().hasClass('selected')){
            $option.prop('selected', true);
        }
        //option's value is a's href 
        $option.val($anchor.attr('href'));
        //option's text is a's text
        $option.text($anchor.text());
        //append option to select
        $select.append($option);
    });
    
    //Bind a change listener 
    $select.change(function(){
        //go to selected location
        window.location = $select.val();
    });
});