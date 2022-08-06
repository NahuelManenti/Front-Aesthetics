import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../css/Details.css";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            titulo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            descripcion
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

//ver que algunos tratamientos son varias imag con textos