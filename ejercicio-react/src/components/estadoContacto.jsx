import React, { useState } from 'react'
import PropTypes from 'prop-types'


function EstadoContacto({conexion}) {

  const [estado , setEstado] = useState(conexion)

  return (
    <div>
      <h6>
      Estado Contacto : {estado === true ? "Contacto En Línea" : "Contacto No Disponible"}
      </h6>
      <button onClick={()=>{estado === true ? setEstado(false) : setEstado(true) }}>Cambiar a {estado === true ? 'No Disponible' : 'Disponible'} </button>


    </div>
  )
}

EstadoContacto.propTypes = {
  conexion : PropTypes.bool
}




export default EstadoContacto





