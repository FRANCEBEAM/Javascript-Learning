//create Agent Class
class Agent{
    constructor(codename, type, description){
        this.codename = codename;
        this.type = type;
        this.description = description
    }
  }

    class DISPLAY{
    static addAgentToList(agent){
        const list = document.querySelector('#agent-list');
        const row = document.createElement('tr');

        row.innerHTML = 
        `<td>${agent.codename}</td>
        <td>${agent.type}</td>
        <td>${agent.description}</td>
        <td><button class="btn btn-danger btn-sm delete">X</button></td>`

        list.appendChild(row);
    }

    static clearField(){
        document.querySelector('#codename').value='';
        document.querySelector('#type').value='';
        document.querySelector('#description').value='';

    }

    static deletebutton(del){
        if(del.classList.contains('delete')){
            del.parentElement.parentElement.remove();
            DISPLAY.showAlert('Agent Terminated','danger');
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#agent-form');
        container.insertBefore(div,form);

        setTimeout(()=> document.querySelector('.alert').remove(),3000);
    }
    }



    //add event and initialization
    document.querySelector('#agent-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const codename = document.querySelector('#codename').value;
    const type = document.querySelector('#type').value;
    const description = document.querySelector('#description').value;

    if(codename===""||type===""||description===""){
        DISPLAY.showAlert('Please fill all fields','danger');
    }else{

    const agent = new Agent(codename, type, description);

    DISPLAY.clearField();
    DISPLAY.addAgentToList(agent);
    DISPLAY.showAlert('Hire Added','success');
}
});

//remove agent
document.querySelector('#agent-list').addEventListener('click',(e)=>{
    DISPLAY.deletebutton(e.target).value

    DISPLAY.showAlert('Agent Terminated','danger');


});






// get the input of search and add event listener of KEYUP
document.querySelector('#filterInput').addEventListener('keyup',searchNames)

//search function
function searchNames(e){
    var itemList = document.querySelector('#agent-list');
    var text = e.target.value.toLowerCase();

    //get list
    var items = itemList.getElementsByTagName('tr');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display = "";
        }else{
            item.style.display = 'none';
        }
    });
}
    


