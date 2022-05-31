

//lets grab the input field of amount,from and to

var amount = document.querySelector('#amountField').addEventListener('input', amountField);

function amountField(){
    var amount = document.querySelector('#amountField').value;

    
   document.querySelector('#euro').innerHTML = 
   '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png?20081021155534" width="20%"><b><span style="margin-left: 4em;">€ EURO: </span></b>'+ amount * 0.0176049
   +'<br><span style="margin-left: 10em;">1 PHP = 0.0176193 EUR</span>'+
   '<br><span style="margin-left: 10em;">1 EUR = 56.7560 PHP</span>';

   document.querySelector('#usd').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_the_U.S..svg/1200px-Flag_of_the_U.S..svg.png" alt="" width="20%"><b><span style="margin-left: 4em;">$ USD: </span></b>'+ amount * 0.0192499
   +'<br><span style="margin-left: 10em;">1 PHP = 0.0192643 USD</span>'+
   '<br><span style="margin-left: 10em;">1 USD = 51.9095 PHP</span>';

    document.querySelector('#gbp').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" alt="" width="20%"><b><span style="margin-left: 4em;">£ GBP: </span></b>'+ amount * 0.0145497
    +'<br><span style="margin-left: 10em;">1 PHP = 0.0145606 GBP</span>'+
   '<br><span style="margin-left: 10em;">1 GBP = 68.6785 PHP</span>';
    
    document.querySelector('#aust').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png" alt="" width="20%"><b><span style="margin-left: 4em;">A$ AUD: </span></b>'+ amount * 0.0261134
    +'<br><span style="margin-left: 10em;">1 PHP = 0.0261332 AUD</span>'+
   '<br><span style="margin-left: 10em;">1 AUD = 38.2655 PHP</span>';

    document.querySelector('#cand').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1200px-Flag_of_Canada.svg.png" alt="" width="20%"><b><span style="margin-left: 4em;">CAN$ CAD: </span></b>'+ amount * 0.0245171
    +'<br><span style="margin-left: 10em;">1 PHP = 0.0245236 CAD</span>'+
   '<br><span style="margin-left: 10em;">1 CAD = 40.7770 PHP</span>';

    document.querySelector('#yen').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png" alt="" width="20%"><b><span style="margin-left: 5em;">¥ YEN: </span></b>'+ amount * 2.21027
    +'<br><span style="margin-left: 10em;">1 PHP = 2.21190 JPY</span>'+
   '<br><span style="margin-left: 10em;">1 JPY = 0.452101 PHP</span>';

}

