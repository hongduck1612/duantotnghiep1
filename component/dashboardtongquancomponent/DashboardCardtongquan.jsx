import React from 'react';
import styles from './DashboardCardtongquan.module.css';

const DashboardCards = () => {
    const cards = [
        { title: 'Tổng sản phẩm', value: '46', color: 'blue', image: '/images/product.jpg' },
        { title: 'Tổng danh mục', value: '5', color: 'green', image: '/images/category.jpg' },
        { title: 'Tài khoản đã đăng ký', value: '5', color: 'yellow', image: '/images/account.jpg' },
        { title: 'Tổng doanh thu', value: '257,180,000 VND', color: 'red', image: '/images/revenue.jpg' },
    ];

    return (
        <div className={styles.dashboardCards}>
            {cards.map((card, index) => (
                <div key={index} className={`${styles.card} ${styles[card.color]}`}>
                    <div className={styles.cardHeader}>
                        <div className={styles.title}>{card.title}</div>
                        <img src={card.image} alt="Logo" className={styles.cardLogo} />
                    </div>
                    <div className={styles.value}>{card.value}</div>
                </div>
            ))}
        </div>
    );
};

export default DashboardCards;
