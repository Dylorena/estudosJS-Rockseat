import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    /* Define que as routes é através do browser
        o path com apenas barra significa que será acessado quando o caminho estiver livre
        O uso dos dois ponto significa passagem de parâmetro.
        o uso do exact vai chamar uma rota quando for exatamente somente a barra
    */
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;

