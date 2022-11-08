import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductDetail from '~/components/ProductDetail';
import styles from './Detail.module.scss';

function Detail(): JSX.Element {
   return (
      <Container>
         <Box>
            <Typography fontSize={"3rem"} className={styles.textHome}>Detail About Product</Typography>
         </Box>
         <ProductDetail />
         <Button variant="contained" component={Link} to="/Shop">
            <ArrowBackIcon />
            Back to Shop
         </Button>
      </Container>
   );
}
export default Detail;
