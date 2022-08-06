import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from "react";
import '../css/Contact.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import swal from 'sweetalert';




export default function ContactC () {

    const [alert, setAlert] = useState(false)
    let messageAlert = '¡Gracias por contactarnos, en la brevedad nos comunicaremos!'


    useEffect(() => {
        if (alert == true) {
          swal(messageAlert);
          setAlert(false)
        }
     }, [alert]);
   

    async function handleCreation(event) {
        event.preventDefault()
       
        setAlert(!alert)
        
      }

    return (
        <form action="#" method="POST">
        <div className='container-map-form'>
            <div className="contact-div-map">
            <h4>Nos encontramos ubicados en: Arenales 2245 piso 1 (Recoleta) Capital Federal</h4>
            <div className='background-aesthethic'>
                <span></span>
            </div>
            <h6>Copyright © TeamLatte ☕</h6>
            </div>
            <div className="contact-div-form">
                <h4 className='title-contact-form'>Para contactarse con nosotros,
                complete el siguiente formulario</h4>
                <Box
                    sx={{
                        '& > :not(style)': { m: 2, width:'20rem'}
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="name" label="Nombre" variant="filled" required={true} /> 
                    <TextField id="lastname" label="Apellido" variant="filled" required={true}/>
                    <TextField id="phone" label="Telefono" variant="filled" required={true}/>
                    <TextField id="mail" label="Email" variant="filled" required={true}/>
                    <TextField id="mensagge" label="Mensaje" variant="filled" required={true}/>
                </Box>
                <div className='container-btn'>
                    <Button onClick={submit => handleCreation(submit)} sx={{my: 2, border: 1, fontSize: '15px'}} variant="outline" startIcon={<EmailIcon/>}>
                    Enviar
                </Button>
                </div>
                <div className='p-from-form'>
                <p><PhoneIcon sx={{mr: 1}} />(011) 4803 - 4545 / 4802 - 5167</p>
                <p><EmailIcon sx={{mr: 1}} />aesthethic@aesthetic.com</p>
                </div>
            </div>
        </div>
        </form>
    );
}