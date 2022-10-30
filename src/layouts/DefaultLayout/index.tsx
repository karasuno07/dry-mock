import { Container } from '@mui/material';
import classNames from 'classnames/bind';

import { Footer, Header } from '../components';
import { LayoutChildren } from '../index';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }: LayoutChildren) => {
   return (
      <>
         <Header />
         <Container disableGutters className={cx('container')}>
            {children}
         </Container>
         <Footer />
      </>
   );
};

export default DefaultLayout;
