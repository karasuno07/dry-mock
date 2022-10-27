import React from 'react';
import styles from '~/components/Layout/footer/Footer.module.scss';

function Footer(){
    return (
        <div className={styles.footer}>
            <p className={styles.FooterText}>Copyright @2022 TuND22 . All right reserved</p>
        </div>
    );
}

export default Footer;