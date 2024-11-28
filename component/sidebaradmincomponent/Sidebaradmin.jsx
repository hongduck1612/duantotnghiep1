import React from 'react';
import styles from './Sidebaradmin.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Admin</h2>
            <div className={styles.userInfo}>
                <img src="/images/admin.jpg" alt="Admin Avatar" height="50px" width="50px" />
                <span>CryberThree</span>
            </div>
            <input type="text" placeholder="Search..." />
            <nav>
                <a href="/admin">Trang Chủ</a>
                <a href="/quanlydanhmuc">Quản lý danh mục</a>
                <a href="/quanlysanpham">Quản lý sản phẩm</a>
                <a href="/quanlykhachhang">Quản lý khách hàng</a>
                <a href="/quanlygiohang">Quản lý giỏ hàng</a>
                <a href="/themxoasuasanpham">Quản lý thêm xóa sửa sản phẩm</a>
                <a href="/quanlybanner">Quản lý banner</a>
                
            </nav>
        </div>
    );
};

export default Sidebar;
