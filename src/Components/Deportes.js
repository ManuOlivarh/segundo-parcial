import React, { Component } from 'react'
import MostrarDeportes from "./MostrarDeportes";

export default class Deportes extends Component {

url='http://localhost:8080/deporte'

state={
    deporte:[],
}

componentDidMount(){
    fetch(this.url)
    .then(response=> response.json())
    .then(deporte => this.setState({deporte: deporte.data}))
    .catch(e=>console.log(e));
}

    render() {
        return (
            <div>
                <div>
                    <h1>AQUI SE MOSTRARAN LOS DATOS</h1>
                </div>
                <div>
                    <MostrarDeportes deporte={this.state.deporte}/>
                </div>

            </div>
        )
    }
}
