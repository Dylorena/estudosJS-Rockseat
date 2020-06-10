import React from 'react';
import logo from '../../assets/logo.svg'
import Link from '../linkHeader/Link'
import './header.css'

export default class Header extends React.Component {
    render(){
        return (
        <div className="content-header">
            <header>
                <img src= { logo } alt="Logomarca" /> 
                <Link text="Cadastre um ponto de coleta"/>   
            </header>
        </div> )
    }
        
}