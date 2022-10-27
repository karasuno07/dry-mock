import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselProduct() {
   const dataCarousel = [
      {
         id: 1,
         img: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/12/Xiaomi-11i-Hypercharge-photoutils.com_.jpeg?resize=768%2C432&ssl=1',
      },
      {
         id: 2,
         img: 'https://www.sammobile.com/wp-content/uploads/2022/08/Galaxy-Z-Fold-4-23-1-1200x675.jpg',
      },
      {
         id: 3,
         img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg',
      },
      {
         id: 4,
         img: 'https://images.indianexpress.com/2018/08/759_1-4.jpg',
      },
   ];

   return (
      <div className="carousel-wrappper">
         <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}>
            {dataCarousel.map((item: any) => (
               <div>
                  <img src={item.img} height={400} />
               </div>
            ))}
         </Carousel>
      </div>
   );
}

export default CarouselProduct;
