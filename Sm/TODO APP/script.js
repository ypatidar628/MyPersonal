var listContainer = document.getElementById('list');
var input = document.getElementById('input');

 
 function addTask() {

    if( input.value == '')
    {
        alert('please enter task')
    }
    else{
        var li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        var span  = document.createElement('span')
        span.innerHTML = '&#10006';
        li.appendChild(span)
       

    }
    input.value = ''
    saveData()
 }

 listContainer.addEventListener('click',(e)=>{
        if(e.target.tagName == 'LI')
        {
            e.target.classList.toggle('checked')
            saveData()
        }
        else if(e.target.tagName === 'SPAN')
        {
            e.target.parentElement.remove();
            saveData()
        }

 });

 function saveData()
 {
    localStorage.setItem('data',listContainer.innerHTML)

 }
 function showData()
 {
    let data = localStorage.getItem('data')
    listContainer.innerHTML = data;
 }
 showData()