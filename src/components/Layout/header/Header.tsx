import React from "react";
import styles from '~/components/Layout/header/Header.module.scss';
import classname from 'classnames';
import Search from "~/components/search/Search";
import  Avatar  from "~/components/Layout/avatar/Avatar";
import { Home, LocalMall, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function Header(){
    return(
        <div className={styles.header}>
            <a href='/' className={styles.logo}>Logo</a>
            <a href='/' className={styles.HeaderA}><Home/>Home</a>
            <a href='/Shop' className={styles.HeaderA}><LocalMall/>Shop</a>
            <a href='/Cart' className={classname('header_a',styles.HeaderA)}><ShoppingCart/>Cart</a>
            <Search/>
            <Avatar/>
        </div>
    );
}
export default Header;