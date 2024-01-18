var list = document.getElementById('unOrdList');
var inputBox = document.getElementById('todoInp');
var btnAdd = document.getElementById('addItem');

var currentInputValue = ''
inputBox.addEventListener('input', function(e) {
    currentInputValue =  e.target.value;

});

btnAdd.addEventListener('click', function() {
    if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') 
    { 

        var newListElement = document.createElement('li')
        var textNode = document.createTextNode(currentInputValue) 
        newListElement.appendChild(textNode);
        newListElement.id = "Item" + (list.childElementCount + 1);

        list.appendChild(newListElement);
        console.log(list.childElementCount);
    }
    else
    {
        alert('Please enter a valid TODO Iteam !')
    }
    
});