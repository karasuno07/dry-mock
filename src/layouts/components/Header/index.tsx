import {
   Home as HomeIcon,
   LocalMall as MallIcon,
   ShoppingCart as CartIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import classname from 'classnames';
import { Box } from '@mui/material';

import AvatarUser from '~/components/UI/Avatar/Avatar';
import SearchBox from './SearchBox/SearchBox';
import styles from './Header.module.scss';
import config from '~/config';

function Header() {

   const isAuthenticated : boolean =true;

   return (
      <Box className={styles.Header}>
         <Box display={'flex'} alignItems="center">
            <Link to={config.routes.home} className={styles.Logo}>
               Logo
            </Link>
            <Link to={config.routes.home} className={classname(styles.Link, styles.Hoverable)}>
               <HomeIcon fontSize="large" />
               <span>Home</span>
            </Link>
            <Link to={config.routes.shop} className={classname(styles.Link, styles.Hoverable)}>
               <MallIcon fontSize="large" />
               <span>Shop</span>
            </Link>
            <SearchBox />
         </Box>
         <Box display={'flex'} alignItems="center" marginLeft={'auto'}>
            <Link to={config.routes.cart} className={styles.Link}>
               <CartIcon fontSize="large" />
               <span>Cart</span>
            </Link>
            {(isAuthenticated == true) ? (
               <AvatarUser />
            ) : (
               <>
                  <Link to={config.routes.login} className={styles.Link}>
                     Login
                  </Link>
                  <Link to={config.routes.register} className={styles.Link}>
                     Register
                  </Link>
               </>
            )}
            {/* {isAuthenticated && <AvatarUser />}
            {!isAuthenticated && <AvatarUser />} */}
         </Box>
      </Box>
   );
}
export default Header;
