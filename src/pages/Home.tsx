import React from 'react';

//import classname from 'classnames';

import styles from './Home.module.scss';
import {Header} from '~/components/Layout/header';
import Footer from '~/components/Layout/footer/Footer';
import CardProduct from '~/components/CardProduct/CardProduct';
import CarouselProduct from '~/components/Carousel/Carousel';

//import Header from '~/components/Layout/header/Header';
// interface HomeProps  {
//     key1: string,
//     key2: number | string;
//     key3: 'abc' | 'bcd'
// }

// function Home({key1, key2, key3}: HomeProps): JSX.Element {
//     return <div className={classname('class1', styles.HomeBar)}></div>;
// }
function Home(): JSX.Element {
   return (
      <div>
         <Header />
         <CarouselProduct />
         <div className={styles.bgText}><p className={styles.textHome}>Special Items</p></div>
         <CardProduct />
         <Footer />
      </div>
   );
}
export default Home;
