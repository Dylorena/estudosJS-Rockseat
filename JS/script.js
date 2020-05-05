var buttonElement = document.querySelector('#App button');
var listElement = document.querySelector ('#App ul');
var inputElement = document.querySelector('#App input');

var todos = [
    'Fazer café',
    'Estudar JS',
    'Acessar comunidade da rockseat'
];

function renderTodo () {

    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        
    }
}


function adicionarTodo (){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
}

buttonElement.onclick = adicionarTodo;

renderTodo();
