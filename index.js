var button = document.getElementsByClassName("foodBtn");
var foodBtn = button[0];

var requestFoods = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/employees')
    xhr.onreadystatechange = function(){
        if(xhr.readyState == XMLHttpRequest.DONE){
            console.log(xhr.response);
        }
    }
    xhr.send();
}

foodBtn.addEventListener('click', requestFoods);