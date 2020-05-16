Arquivos de acompanhamento do cursos de ES6+ da [Rocketseat].

**Anotações gerais**

O Async-await faz uso do try/catch. 
As promises usam .then/.catch

```
$ yarn init
$ yarn add @babel/cli
$ yarn add @babel/present-env
$ yarn add @babel/core
$ yarn add @babel/plugin-transform-async-to-generator
```
Criar o arquivo .gitignore e adicionar a pasta node_modules.

No arquivo package.json: 
```
"scripts": {
    "dev": "babel ./main.js -o ./bundle.js"
}
```
Webpack:
```
$ yarn add webpack webpack-cli -D
$ yarn add babel-loader -D
```
No arquivo package.json trocar os scripts: 
```
"scripts": {
    "dev": "webpack --mode=development -w"
  }
```
Para "rodar":
````
$ yarn dev
````
[Rocketseat]: <https://rocketseat.com.br/starter>