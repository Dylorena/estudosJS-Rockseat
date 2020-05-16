var lista = document.getElementById('list');
var usuario = document.querySelector('input ');
var div = document.querySelector('div');

function buscarAPI(){
       
    axios.get('https://api.github.com/users/' + usuario.value + '/repos')
        .then (function(response){
            for(var indice = 0;indice < response.data.length;indice++){
                
                var element = document.createElement('li');
                var textElement = document.createTextNode(response.data[indice].name);

                element.appendChild(textElement);
                lista.appendChild(element);
            }   
        })
        .catch (function(error){
            console.warn(error);
            var element = document.createElement('h3');
            var textError = document.createTextNode('Usuário do github não encontrador. Verifique e tente novamente.');
            
            element.appendChild(textError);
            div.appendChild(element);
            
        });   

}




