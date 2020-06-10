import React from 'react';
import login from '../../assets/log-in.svg'

export default class Link extends React.Component {
    render(){
        return (
            <a href="#">
                <span> <img src={ login } alt=" imagem de porta "/>  </span>
                {this.props.text}
            </a> 
        )
    }
        
}