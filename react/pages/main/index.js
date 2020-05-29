
import React, {Component} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    // Esse método é executado assim que o componente é exibido em tela.
    componentDidMount () {
        this.loadProducts();
    }

    /* Quando se cria uma função 'nossa' usa se arrow function pq senão a função não enxerga
    o escopo do this*/
    // page = 1, é o valor padrão caso nada seja passado.
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        
        const {docs, ...productInfo} = response.data;

        this.setState({products: docs, productInfo, page});
        
    };

    prevPage = () => {
        const {page} = this.state;

        if (page === 1) return;

        const pagenumber = page - 1;

        this.loadProducts(pagenumber);

    }

    nextPage = () => {
        const {page, productInfo} = this.state;

        //Se a página que tiver ja for a última o return não fará nada.
        if (page === productInfo.pages) return;

        const pagenumber = page + 1;

        this.loadProducts(pagenumber);

    }
    
    render () {
        const {products, page, productInfo } = this.state;

        return (
            <div className="product-list"> 
                {products.map(product => (
                    <article key={product._id}> 
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled= {page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled= {page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}