import React from 'react';
import img from '~/image/avatar.jpg';

import styles from '~/components/Layout/avatar/Avatar.module.scss';
function Avatar (){
    return (
        <span>
            <img className={styles.imgAvatar} src={img} alt="" />
            <label>User1</label>
        </span>
        
    );
}

export default Avatar;
