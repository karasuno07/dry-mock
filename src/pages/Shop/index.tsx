import { Box, Typography } from '@mui/material';
import CardProduct from '~/components/ProductList';
import { dataTech } from '~/app/data/reducer';

function Shop(): JSX.Element {
   return (
      <>
         <Box>
            <Typography
               fontSize={55}
               textTransform="uppercase"
               textAlign="center"
            >
               Our Product
            </Typography>
         </Box>
         <CardProduct list={dataTech} />
      </>
   );
}
export default Shop;
