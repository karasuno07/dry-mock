import {
   Home as HomeIcon,
   LocalMall as MallIcon,
   ShoppingCart as CartIcon,
   Login as LoginIcon,
   AppRegistration as RegisterIcon,

} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import classname from 'classnames';
import { Box } from '@mui/material';

import { useAppSelector } from '~/app/hooks';
import AvatarUser from '~/components/UI/Avatar/Avatar';
import SearchBox from './SearchBox/SearchBox';
import styles from './Header.module.scss';
import config from '~/config';

function Header() {

   const auth = useAppSelector(state => state.auth)

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
            {(auth.isAuthenticated === true) ? (
               <AvatarUser />
            ) : (
               <>
                  <Link to={config.routes.login} className={styles.Link}>
                     <LoginIcon fontSize="large" />
                     <span>Login</span>
                  </Link>
                  <Link to={config.routes.register} className={styles.Link} style={{marginRight:'33px'}}>
                     <RegisterIcon fontSize="large" />
                     <span>Register</span>
                  </Link>
               </>
            )}
         </Box>
      </Box>
   );
}
export default Header;
