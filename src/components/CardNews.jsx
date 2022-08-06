import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useLazyDisplay } from './fadeAnimacion.jsx'
import { Fade } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import treatmentsActions from '../redux/actions/treatmentsActions.js';

export default function Repiola(props) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.userReducer.user)
    const [visible, element] = useLazyDisplay();

    return (
        <div ref={element}>
            <Fade in={visible} timeout={2000}>
                <Card className="card-news" key={props.novedad._id} sx={{ maxWidth: 1400, maxHeight: 200 }}>
                    <CardMedia className="card-news-jq"
                        sx={{ maxHeight: 300}}
                        component="img"
                        image={props.novedad.image}
                        alt="image"
                    />
                    <CardContent className="card-content-news">
                        <Typography className="title-news" gutterBottom variant="h6" component="div">
                            {props.novedad.name}
                        </Typography>
                        <Typography className="description-news" variant="body2" color="text.secondary">
                            {props.novedad.description}
                        </Typography>
                        <div className='btn-news-card'>
                        {(user && user.role == 'admin' && <LinkRouter to='/adminmodifynews' className='modificar-adm-news' onClick={() => dispatch(treatmentsActions.productoaModificar(id))}><h5><button className='button-news-modify'>Modificar</button></h5></LinkRouter>)}
                        {(user && user.role == 'admin' && <LinkRouter to='/admindeletenews' className='eliminar-adm-news' onClick={() => dispatch(treatmentsActions.productoaEliminar(id))}><h5><button className='button-news-delete'>Eliminar</button></h5></LinkRouter>)}
                    </div>
                    </CardContent>
                </Card>
            </Fade>
        </div>
    );
}