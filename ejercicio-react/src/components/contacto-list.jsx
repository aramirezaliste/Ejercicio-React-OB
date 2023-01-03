import React from 'react'
import ContactoComponent from './contacto'
import { Contacto } from '../models/contacto_class'

function ContactoListComponent() {
    
    const contactoDefault = new Contacto ("Andres", "Ramirez", "aramirezaliste@gmail.com", true);
    return (
    <div>
        <h1>Contacto:</h1>
        <ContactoComponent info = { contactoDefault }/>
    </div>
  )
}



export default ContactoListComponent
