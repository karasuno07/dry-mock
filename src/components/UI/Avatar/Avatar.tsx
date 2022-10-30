import { Avatar } from '@mui/material';

import img from '~/assets/images/avatar.jpg';
import styles from './Avatar.module.scss';

function AvatarUser() {
   return (
      <div className={styles.avatar}>
         <Avatar alt="User" src={img} />
      </div>
   );
}

export default AvatarUser;
