import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

import Product from '~/models/product';
import styles from './ProductDetail.module.scss';

interface ProductItemProps {
   productDetail: Product;
}

function ProductDetail() {
   let id = localStorage.getItem('id');

   let title = localStorage.getItem('title');
   let imagePhone = localStorage.getItem('img')!;
   let price = localStorage.getItem('price');
   let description = localStorage.getItem('description');
   return (
      <Card className={styles.CardDetail}>
         <CardMedia
            component="img"
            height="500px"
            image={imagePhone}
            className={styles.ImgDetails}
         />
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography>
                  <span>Product Name:</span> {title}
               </Typography>
               <Typography>
                  <span>Price:</span> {price}
               </Typography>
               <Typography>
                  <span>Description:</span> {description}
               </Typography>
            </CardContent>
         </Box>
      </Card>
   );
}

export default ProductDetail;
