$('document').ready(function(){
      function printNumber(number){
        $('.placeholder').html(number);
      }

      $('#button').click(function(){
            var result = dice.roll();
            printNumber(result);
      });

});
