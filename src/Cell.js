import React, { Component } from 'react';


export default class Cell extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: props.value
        }
    }

    colourChange = () =>{
        this.setState({
            color: '#333'
        })
    }


    render() {
      return (<div onClick={this.colourChange}  className="cell" style={{backgroundColor: this.state.color}}></div>
      )
    }
  }