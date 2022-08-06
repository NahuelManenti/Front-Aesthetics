import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../css/Cards.css"
import { useDispatch, useSelector } from 'react-redux';
import treatmentsActions from '../redux/actions/treatmentsActions';
import { useEffect } from 'react';
import { purple } from "@mui/material/colors";
import { Link as LinkRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function Cardtreatments({ filterTreatments }) {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(treatmentsActions.getOneTreatment(id))
  },[])
  const {id} = useParams()
  const user = useSelector((store) => store.userReducer.user)

  return (
    <>
      <div className='contenedor-tratamientos'>


        <div className='tarjetas-tratamientos'>
          {filterTreatments?.length > 0 ?
            filterTreatments?.map((treatment, index) => (
              <Card className='card-component-tratamiento' key={index} sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia className='imagen-card-tratamientos'
                    component="img"
                    image={treatment.image}
                    alt={treatment.name}
                  />
                  <CardContent className='card-content-tratamiento'>
                    <Typography gutterBottom variant="h5" component="div">
                      {treatment.name}
                    </Typography>
                    <Typography className='detalles-tratamiento' variant="body2" color="text.secondary">
                      {treatment.details}
                    </Typography>

                    <LinkRouter to={`/contact/`}>
                      {user && user.role === 'admin' ? <></> : <Button className='boton-contat-tratamiento' size="small" sx={{ color: purple[500] }}>
                        <b>¡Contáctanos!</b>
                      </Button>}
                    </LinkRouter>
                    {(user && user.role == 'admin' && <LinkRouter to='/adminmodifytreatment' className='modificar-adm' onClick={() => dispatch(treatmentsActions.productoaModificar(id))}><h5><button className='button'>Modificar</button></h5></LinkRouter>)}
                    {(user && user.role == 'admin' && <LinkRouter to='/admindeletetreatment' className='eliminar-adm' onClick={() => dispatch(treatmentsActions.productoaEliminar(id))}><h5><button className='button2'>Eliminar</button></h5></LinkRouter>)}
                  </CardContent>
                </CardActionArea>
              </Card>
            )) :

            <Typography>cargando</Typography>}
        </div>

      </div>
    </>
  );
}