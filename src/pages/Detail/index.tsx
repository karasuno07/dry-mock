import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductDetail from '~/components/ProductDetail';
import styles from './Detail.module.scss';

function Detail(): JSX.Element {
   return (
      <Container>
         <Box sx={{pt:2}}>
            <Typography fontSize={"3rem"} className={styles.textHome}>Detail About Product</Typography>
         </Box>
         <ProductDetail />
         <Button sx={{mt: 1, mb:1}} variant="contained" component={Link} to="/Shop">
            <ArrowBackIcon />
            Back to Shop
         </Button>
      </Container>
   );
}
export default Detail;
