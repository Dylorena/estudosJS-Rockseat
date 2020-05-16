var buttonElement = document.querySelector('#App button');
var listElement = document.querySelector ('#App ul');
var inputElement = document.querySelector('#App input');

var todos = [
    'Fazer café',
    'Estudar JS',
    'Acessar comunidade da rockseat'
];

function renderTodo () {

    //Limpar a lista da tela antes de renderizar a lista atualizada.    
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        todoElement.appendChild(todoText);
        
        var pos = todos.indexOf(todo);

        var btnExcluir = document.createElement('a');
        var btnText = document.createTextNode('Excluir');

        btnExcluir.setAttribute('onclick','deleteTodo('+ pos + ')');

        btnExcluir.setAttribute('href','#')
        btnExcluir.appendChild(btnText);

        listElement.appendChild(todoElement);
        todoElement.appendChild(btnExcluir);
    }
}

function adicionarTodo (){
    var todoText = inputElement.value;

    todos.push(todoText);

    //limpa o input para a próxima inserção
    inputElement.value = '';
    renderTodo();
}

function deleteTodo (pos) {
    todos.splice(pos,1);
    renderTodo();
}

//Por ser somente um comando é excluido a estrutura completa de função.
buttonElement.onclick = adicionarTodo;

renderTodo();
