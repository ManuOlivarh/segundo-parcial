import React, { Component } from "react";

export default class AgregarDeportes extends Component {
    state = {
        data: {
            nombre:'',
            codigo: 0
              }
      };
    
    setValues=(e,field) =>{
            const {data} = this.state;
            data[field] = e.target.value;
            this.setState({data});
            console.log(this.state.data)


    }


    create = () => {
        let data = {

            nombre: this.state.data.nombre,
            codigo: parseInt(this.state.data.codigo)
        };

        console.log(data)
    }
 
    render() {
    return (
      <div>
        <form className="col-md-6 mx-auto mt-5">
          <div className="form-group">
            <label >Ingrese el Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              value={this.state.data.nombre}
              onChange={e=>this.setValues(e,'nombre')}
            />
          </div>
          <div className="form-group">
            <label>Ingrese su Código</label>
            <input
              type="number"
              className="form-control"
              placeholder="Codigo"
              
              value={this.state.data.codigo}
              onChange={e=>this.setValues(e,'codigo')}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
