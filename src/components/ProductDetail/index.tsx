import { Add, Remove } from '@mui/icons-material';
import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   IconButton,
   TextField,
   Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '~/app/hooks';

import { fetchUserById } from '~/app/reducer/ProductDetailReducer';
import styles from './ProductDetail.module.scss';

const formatter = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'VND',
   minimumFractionDigits: 0,
});

function ProductDetail() {
   const dispatch = useAppDispatch();
   const { id } = useParams();
   const productDetail = useAppSelector((state) => state.productDetail);

   useEffect(() => {
      id && dispatch(fetchUserById(id));
      console.log(id);
      
   }, [id]);

   return (
      <Card className={styles.CardDetail}>
         <CardMedia component="img" height="500px" image="" className={styles.ImgDetails} />

         <CardContent className={styles.CartInfo}>
            <Typography className={styles.Name} variant="h2" align="center">{productDetail.id}</Typography>
            <Typography className={styles.Price}>
               Price: {formatter.format(parseFloat('1313132'))}
            </Typography>
            <Typography height={'200px'} overflow={'scroll'}>
               Description:
            </Typography>
            <CardActions className={styles.btnCart} style={{ justifyContent: 'right' }}>
               <Box>
                  <IconButton>
                     <Remove />
                  </IconButton>
                  <TextField type={'number'} className={styles.boxCount} />
                  <IconButton>
                     <Add />
                  </IconButton>
               </Box>
               <Button variant="contained">Add to cart</Button>
            </CardActions>
         </CardContent>
      </Card>
   );
}

export default ProductDetail;
