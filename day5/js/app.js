//1. create XMLHttpRequest object
var xhr = new XMLHttpRequest();
//2. callback function 
xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var employees = JSON.parse(xhr.responseText); //make string to JSON object 
            var statusHTML = '<ul class="bulleted">';
            for(var i = 0; i < employees.length; i++){
                if(employees[i].inoffice === true){
                    statusHTML += '<li class="in">';
                }else{
                    statusHTML += '<li class="out">';
                }
                statusHTML += employees[i].name;
                statusHTML += '</li>';
            }//end of for loop
            statusHTML += '</ul>'; // end of ul
            document.getElementById('employeeList').innerHTML = statusHTML;
        }
}
    
//open request 
xhr.open('GET', './employees.json');
//send request 
xhr.send();