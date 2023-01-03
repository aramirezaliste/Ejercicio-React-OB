
import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto_class'

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
        <p>
            Estado: {info.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
        </p>
    
    </div>
  )
}

ContactoComponent.propTypes = {
    info : PropTypes.instanceOf(Contacto)
}

export default ContactoComponent
