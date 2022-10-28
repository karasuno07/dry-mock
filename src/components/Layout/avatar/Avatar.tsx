import React from 'react';
import { Avatar } from '@mui/material';

import img from '~/image/avatar.jpg';
import styles from './Avatar.module.scss';
function AvatarUser() {
   return (
      <div className={styles.avatar}>
         <Avatar alt="User" src={img} />
         <label>User1</label>
      </div>
   );
}

export default AvatarUser;
