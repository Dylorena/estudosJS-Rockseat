import React from 'react'

import './button.css'

export default class Button extends React.Component{
    render(){
        return (
            <a href="#"> <span></span> <strong>{this.props.text}</strong></a>
        )
    }
}
