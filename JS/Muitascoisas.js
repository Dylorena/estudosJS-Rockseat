//Exercicio 01


/*class Usuario {
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(email,senha){
        super(email,senha)
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
const Adm2 = new Admin('emaildsfgdsg@teste.com', 'sendsgsdgsdha123');
var user2 = new Usuario('dulorens@pipopo.com','pipopopipo');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
console.log(user2.isAdmin())
console.log(Adm2.isAdmin()) */

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

let idades = usuarios.map(index => index.idade);
let filtro = usuarios.filter(user => (user.idade > 18 && user.empresa == 'Rocketseat'));
let search = usuarios.find(index => index.empresa == 'google');

//console.log(op);
//console.log(idades);
//console.log(search);


//const arr = [1, 2, 3, 4, 5];
//console.log(arr.map(item => item + 10));

//const usuario = { nome: 'Diego', idade: 23 };
//const mostraIdade = (usuario => usuario.idade);

//console.log(mostraIdade(usuario));
///////////////////////////////////////////////////////////

/*const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diana', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
*/

//const promise = () => new Promise((resolve, reject) => resolve());

/* 
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

const {nome,endereco: {cidade,estado}} = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado);
*/

/*function soma(...params) {
    return params.reduce((total,  next) => total+next);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};
   
const usuario2 = {...usuario, endereco:{...usuario.endereco, cidade:'Lontras'}};
console.log(usuario2);


const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui  ${idade} anos`);
*/

const nome = 'Diego';
const idade = 23;

const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};

console.log(usuario);