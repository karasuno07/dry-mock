import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { PriceChange } from '@mui/icons-material';

function CardProduct() {
   const dataTech = [
      {
         id: 1,
         title: 'samsung',
         img: 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
         price: 2000000,
      },
      {
         id: 2,
         title: 'Iphone',
         img: 'https://cdn.tgdd.vn/Products/Images/42/289691/iphone-14-pro-vang-thumb-600x600.jpg',
         price: 2000000,
      },
      {
         id: 3,
         title: 'Vivo',
         img: 'https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg',
         price: 2000000,
      },
      {
         id: 4,
         title: 'Xiaomi',
         img: 'https://cdn.tgdd.vn/Products/Images/42/269831/Xiaomi-redmi-note-11-black-600x600.jpeg',
         price: 2000000,
      },
      {
         id: 5,
         title: 'Oppo',
         img: 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
         price: 2000000,
      },
      {
         id: 6,
         title: 'Nokia',
         img: 'https://cdn.tgdd.vn/Products/Images/42/270207/nokia-g21-t%C3%ADm-thum-600x600.jpg',
         price: 2000000,
      },
   ];
   return (
      <>
         {dataTech.map((item: any) => (
            
            <Card sx={{ maxWidth: 345 }}>
                {item.id}
               <CardActionArea>
                  <CardMedia component="img" height="350" image={item.img} alt="imagePhone" />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                     </Typography>
                  </CardContent>
               </CardActionArea>
               <CardActions>
                  <Button variant="contained" size="small" color="success">
                     Detail
                  </Button>
               </CardActions>
            </Card>
         ))}
      </>
   );
}

export default CardProduct;
