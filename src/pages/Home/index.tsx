import { Box, Typography } from '@mui/material';

import CardProduct from '~/components/ProductList';
import CarouselProduct from '~/components/CarouselBanner';
import { dataCarousel, dataTech } from '~/app/data/reducer';
import styles from './Home.module.scss';

function Home(): JSX.Element {
   return (
      <>
         <CarouselProduct list={dataCarousel} />
         <Box className={styles.bgText}>
            <Typography
               fontSize={70}
               textTransform="uppercase"
               textAlign="center"
               className={styles.textHome}
            >
               Special Items
            </Typography>
         </Box>
         <CardProduct list={dataTech.slice(0,4)} />
      </>
   );
}
export default Home;
