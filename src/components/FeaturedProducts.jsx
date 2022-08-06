import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import '../css/featuredProducts.css'
import { Link as LinkRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import productActions from '../redux/actions/productActions';

export default function FeaturedProducts() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.getProducts())
        // eslint-disable-next-line
    }, [])
    const products = useSelector((store) => store.productsReducer.products)

    return (
        <>
            <div className="title-products">
                <h3>Productos Destacados</h3>
            </div>
            <div className='div-featured-products'>
                {products.map((products, index) =>
                    products.productHigh ? <Card className='card-component' sx={{ maxWidth: 345 }} key={products.name}>
                        <CardActionArea>
                            <LinkRouter to={`/products/${products._id}`}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={products.image}
                                alt="products"
                            />
                            <CardContent className="card-content">
                                <Typography variant="body1" color="text.primary" sx={{textAlign: 'center'}}>
                                    ${products.price}
                                </Typography>
                            </CardContent>
                            </LinkRouter>
                        </CardActionArea>
                    </Card> : <Typography key={products.name}></Typography>
                )}
            </div>
        </>
    )
}