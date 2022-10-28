import {
   Home as HomeIcon,
   LocalMall as MallIcon,
   ShoppingCart as CartIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import classname from 'classnames';

import AvatarUser from '~/components/Layout/avatar/Avatar';
import styles from './Header.module.scss';
import Search from '~/components/Layout/header/search/Search';
import { Box } from '@mui/material';

function Header() {
   return (
      <Box className={styles.header}>
         <Box display={'flex'} alignItems='center'>
            <Link to="/" className={styles.logo}>
               Logo
            </Link>
            <Link to="/" className={classname(styles.Link, styles.Hoverable)}>
               <HomeIcon fontSize="large" />
               <span>Home</span>
            </Link>
            <Link to="/Shop" className={classname(styles.Link, styles.Hoverable)}>
               <MallIcon fontSize="large" />
               <span>Shop</span>
            </Link>
            <Search />
         </Box>
         <Box display={'flex'} alignItems='center' marginLeft={'auto'}>
            <Link to="/Cart" className={styles.Link}>
               <CartIcon fontSize="large" />
               <span>Cart</span>
            </Link>
            <AvatarUser />
         </Box>
      </Box>
   );
}
export default Header;
