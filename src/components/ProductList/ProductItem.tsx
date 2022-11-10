import { Button, CardActionArea, CardActions, Tooltip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '~/models/product';
import styles from './CardProduct.module.scss';
interface ProductItemProps {
   product: Product;
}
const formatter = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'VND',
   minimumFractionDigits: 0,
});
const ProductItem = ({ product }: ProductItemProps) => {
   return (
      <>
         <Card className={styles.productCard} sx={{ maxWidth: 400 }}>
            <CardActionArea>
               <CardMedia
                  className={styles.mediaImg}
                  component="img"
                  height="350px"
                  image={product.img}
                  alt="imagePhone"
               />
               <CardContent>
                  <Tooltip disableFocusListener title={product.title} placement="top-end" arrow>
                     <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                        color="#6ae021"
                        height={38}
                        overflow="hidden"
                     >
                        {product.title}
                     </Typography>
                  </Tooltip>

                  <Typography variant="body2" align="center">
                     Price: {formatter.format(product.price)}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
               <Button
                  component={Link}
                  to={`/detail/${product.id}`}
                  variant="contained"
                  size="small"
                  className={styles.btnCard}
               >
                  Watch more
               </Button>
            </CardActions>
         </Card>
      </>
   );
};

export default ProductItem;
