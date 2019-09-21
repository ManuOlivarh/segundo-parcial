import React, { Component } from "react";

export default class MostrarDeportes extends Component {

  render() {
    const { deporte } = this.props;
    console.log(deporte);
    return (
      <div>
        <div>
          <h2>Listado de Productos</h2>
        </div>
        <div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Codigo</th>
              </tr>
            </thead>
            <tbody>
              {deporte.map(deporte => (
                <tr key={deporte.id}>
                  <td>{deporte.id}</td>
                  <td>{deporte.nombre}</td>
                  <td>{deporte.codigo}</td>
                  <td>
                    <input
                      className="btn btn-danger"
                      type="button"
                      value="Editar"
                    />
                  </td>
                  <td>
                    <input
                      className="btn btn-warning"
                      type="button"
                      value="Eliminar"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
