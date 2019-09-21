import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () =>(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  
    <div >
    <NavLink to = '/deportes' className="navbar-brand" activeClassName="active">Deportes</NavLink>
    </div>
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <NavLink to = '/nuevo-deporte' className="nav-link" activeClassName="active">Crear Evento</NavLink>

            </li>
        
        </ul>
</div>
</nav>



)
export default Header;