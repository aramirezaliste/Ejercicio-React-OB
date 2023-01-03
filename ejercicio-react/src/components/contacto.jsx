
import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto_class'
import EstadoContacto from './estadoContacto'

function ContactoComponent({info}) {

  return (
    <div>
        <p>
            Nombre: {info.nombre}
        </p>
        <p>
            Apellido: {info.apellido}
        </p>
        <p> 
            Email: {info.email}
        </p>
    
         <EstadoContacto conexion = {true} />
        
    
    </div>
  )
}

ContactoComponent.propTypes = {
    info : PropTypes.instanceOf(Contacto)
}

export default ContactoComponent
