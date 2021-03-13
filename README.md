# Aula de 12/03/2021


## Criar uma aplicação React e levantar um serviço

```consose
## Instalar o Yarn
$ npm i -g yarn

## Criar uma aplicação React chamada tarefas
$ npx create-react-app tarefas

## Abrir aplicação React no Visual Studio Code
$ code tarefas

## Acessar o diretório da aplicação React
$ cd tarefas

## Instalar biblioteca de rotas para páginas
#### React Router 
#### https://reactrouter.com/core/guides/quick-start
$ yarn add react-router react-router-dom

## Componente para estilizar a app Material UI 
#### https://material-ui.com/pt/
$ yarn add @material-ui/core @material-ui/icons

$ yarn start
```

## Criando diretórios e arquivos na aplicação

```console
## criar diretório de dados e seu arquivo
$ mkdir src/data
$ touch src/data/tasks.js

## criar diretório de componentes e seus arquivos
$ mkdir src/components 
#### sumário dos compenentes
$ touch src/components/index.js 
#### componentes
$ touch src/components/Container.js 
$ touch src/components/FlatList.js 
$ touch src/components/ItemList.js
$ touch src/components/NavBar.js 

$ mkdir src/pages
#### sumário dos páginas
$ touch src/pages/index.js
#### páginas
$ touch src/pages/HomePage.js 
$ touch src/pages/TaskPage.js
```

## em src/App.js importar pages e codificar rotas

## Criar os componentes e programo o HomePage

## Criar componentes de TaskPage ???

## Colocar dados (tarefas) estáticos em src/pages/HomePage.js

## Estilizar componentes

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

## Usar API para capturar dados (tarefas)

# Links

- https://reactjs.org
- https://reactrouter.com/core/guides/quick-start
- https://material-ui.com/pt/getting-started/installation/
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- http://jsonplaceholder.typicode.com/
- https://github.com/axios/axios
