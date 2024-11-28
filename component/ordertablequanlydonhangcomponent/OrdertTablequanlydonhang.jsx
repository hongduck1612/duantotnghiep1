"use client";

import { useState } from "react";
import styles from "./OrderTablequanlydonhang.module.css";

const OrderTable = () => {
  const [orders] = useState([
    {
      id: "DH001",
      customerName: "Nguyễn Văn A",
      total: "30,000 VND",
      status: "Chưa xử lý",
    },
    {
      id: "DH002",
      customerName: "Trần Thị B",
      total: "50,000 VND",
      status: "Chưa xử lý",
    },
  ]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Mã Đơn Hàng</th>
            <th>Tên Khách Hàng</th>
            <th>Tổng Tiền</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                <button
                  onClick={() => showOrderStatus(order.id)}
                  className={`${styles.btn} ${styles.show}`}
                >
                  Chi tiết
                </button>
                <button
                  onClick={() => updateOrderStatus(order.id)}
                  className={`${styles.btn} ${styles.update}`}
                >
                  Cập nhật
                </button>
                <button
                  onClick={() => processOrder(order.id)}
                  className={`${styles.btn} ${styles.process}`}
                >
                  Xử lý
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
