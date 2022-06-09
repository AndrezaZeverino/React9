import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
// essa parte de cima é um padrão 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exemplo from './exemplo';
// abaixo consta a rota do exercicio feito 
import Exercicio from './exercicio';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Cadastro from './cadastro';
 

// abaixo incluí esta parte devido ao exercicio: <Route exact path='/exercicio' component={Exercicio}/>
ReactDOM.render(
  // Padrão abaixo Browser Router - para chamar os nossos componentes React 
  // npm i react-router-dom para instalar as rotas 
  <BrowserRouter>
    <Switch>
      <Route exact path='/cadastro' component={Cadastro}/>
      <Route exact path='/exemplo' component={Exemplo}/>
      <Route exact path='/exercicio' component={Exercicio}/>
      <Route exact path="/" component={App}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
