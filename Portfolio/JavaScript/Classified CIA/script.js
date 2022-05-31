    var form = document.querySelector('#account-form').addEventListener('submit',user)
   
    function user(e){
      e.preventDefault();
      var codename = document.querySelector('#codename').value;
      var password =   document.querySelector('#password').value;
        if(codename ==='CIA' && password ==='052800'){
            location.href = "screen.html";
        }else if(codename ===''|| password ===''){
            var codename = document.querySelector('#codename').value ='';
            var password =   document.querySelector('#password').value='';

            const div = document.createElement('div');
            div.className = `alert danger`;
            div.appendChild(document.createTextNode('Seems you are wondering now'));
            div.style.color="green"
            div.style.textAlign = "center";

            const container = document.querySelector('.container');
            const form = document.querySelector('#account-form');
            container.insertBefore(div,form);

            setTimeout(()=>document.querySelector('.alert').remove(),3000);

        }else{

           var codename = document.querySelector('#codename').value="";
           var password = document.querySelector('#password').value="";
           const div = document.createElement('div');
           div.className = `alert danger`;
           div.appendChild(document.createTextNode("You're Already Dead"));
           div.style.color="red";
           div.style.textAlign = "center";

           setTimeout(()=>document.querySelector('.alert').remove(),3000);

           const container = document.querySelector('.container');
           const form = document.querySelector('#account-form')
           container.insertBefore(div,form);
        }
    }