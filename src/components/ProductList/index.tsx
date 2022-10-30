import { Container, Grid } from '@mui/material';
import ProductItem from '~/components/ProductList/ProductItem';

import Product from '~/models/product';
import styles from './CardProduct.module.scss';

interface ProductListProps {
   list: Product[];
}

function ProductList({ list }: ProductListProps) {
   return (
      <Container className={styles.wrapper}>
         <Grid container spacing={4}>
            {list.map((product: any) => (
               <Grid item xs={3} key={product.id}>
                  <ProductItem product={product} />
               </Grid>
            ))}
         </Grid>
      </Container>
   );
}

export default ProductList;
