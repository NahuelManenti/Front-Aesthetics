import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../css/Cards.css";
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from 'react-redux';
import productActions from '../redux/actions/productActions';
import { useEffect } from 'react';
import { grey } from "@mui/material/colors";
import {Link as LinkRouter} from "react-router-dom";

export default function CardProducts({cardFilter}) {
 
  const dispatch = useDispatch()
  const product = useSelector((store)=> store.productsReducer.products)
  useEffect(()=>{
    dispatch(productActions.getProducts())
  },[])
  
   
  return (
    <>
    { cardFilter?.length>0 ?
     cardFilter?.map((product,index)=>(
    <Card className='card-component-products' key={index} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className="img-card-products"
          component="img"
          height="140"
          image={product.image}
          alt=""
        />
        <CardContent className="card-content-product">
        <Box className='card-marca-product' sx={{ minHeight: 180 }}>
          <Typography gutterBottom variant="h6" component="div" >
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {product.brand}
          </Typography>
          </Box>
          <Typography className='precio' variant="body2" color="text.secondary">
          <b>${product.price}</b>
          </Typography>
          <Typography className='letra-stock' variant="body2" color="text.secondary">
          Stock: {product.productStock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardAction">
        <LinkRouter to={`/products/${product._id}`}>
        <Button size="small" sx={{color: grey[900]}}>
          Ver mas
        </Button>
        </LinkRouter>
      </CardActions>
    </Card>
   ) ):
  
   <Typography>cargando</Typography>}
  </>
    );
}