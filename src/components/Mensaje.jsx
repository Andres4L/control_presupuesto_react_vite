import React from 'react'

const Mensaje = ({children,tipo}) => {
  return (
    //sintaxsis para mezclar una clase fija con una clase dimnanica `alerta ${tipo}`
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje
