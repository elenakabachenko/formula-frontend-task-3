import React, { Component } from 'react';



export default class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input type={this.props.type} className={this.props.className} placeholder={this.props.placeholder} />
        );
    }
}