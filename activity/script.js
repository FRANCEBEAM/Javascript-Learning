$(document).ready(function(){

    //JQueries
    
    $("#btnToggle1").click(function(){
        $(".parag1").toggle(500);
    });

    $("#btnToggle2").click(function(){
        $(".xmlsyntax-container").slideToggle(500);
    });

    //Ajax
    document.getElementById("btnGetText").addEventListener('click', loadText);

    function loadText(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET','sample.txt', true);

    xhr.onload = function(){ 
        if(this.status == 200){
            document.querySelector('.domNodesTxt').innerHTML = this.responseText;
        }else if(this.status = 404){
            document.querySelector('.domNodesTxt').innerHTML = 'Not Found';
        }
    }
    xhr.onerror = function(){
        console.log('Request Error...')
    }
    xhr.send();
}

    $("#btnShowImage").click(function(){
        $(".levelsDom").slideToggle(500);
    });

    $("#btnTraversing").click(function(){
        $(".paragTrav").slideToggle(500);
    });



});