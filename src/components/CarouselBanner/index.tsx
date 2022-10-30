import { Box } from '@mui/system';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { PromoteProduct } from '~/models/product';
import styles from './Carousel.module.scss';

interface CarouselBannerProps {
   list: PromoteProduct[];
}

function CarouselBanner({ list }: CarouselBannerProps) {
   return (
      <Box className="carousel-wrappper">
         <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}>
            {list.map((item: any, index: number) => (
               <Box key={index}>
                  <img src={item.img} className={styles.imageCarousel} alt="img" />
               </Box>
            ))}
         </Carousel>
      </Box>
   );
}

export default CarouselBanner;
