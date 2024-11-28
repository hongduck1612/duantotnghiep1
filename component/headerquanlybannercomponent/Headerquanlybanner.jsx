import React from 'react';
import styles from './Headerquanlybanner.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Home / Quản lý banner</h1>
            <div className={styles.userInfo}>
                <img src="/images/admin.jpg" alt="Admin Avatar" height="50px" width="50px" />
                <span>CryberThree</span>
            </div>
        </div>
    );
};

export default Header;
