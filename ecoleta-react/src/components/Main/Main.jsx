import React from 'react';
import Button from '../buttonlink/Button';

import './main.css';
import '../main.css'

export default class Main extends React.Component {
    render(){
        return (
        <div >
            <div className="content">
                <main>
                    <h1>Seu marketplace de coleta de resíduos </h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <Button text="Pesquisar pontos de coleta"/>
                </main>
            </div>
        </div> )
    }
        
}