"use client";
import { useState } from "react";
import styles from "./CustomerTablequanlykhachhang.module.css"; // Import CSS Modules

const CustomerTable = () => {
  const [customers] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phone: "0901234567",
      image: "/images/customer1.jpg",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@example.com",
      phone: "0902345678",
      image: "/images/customer2.jpg",
    },
  ]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ảnh Khách Hàng</th>
            <th>Tên Khách Hàng</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Chỉnh Sửa</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>
                <img
                  src={customer.image}
                  alt={customer.name}
                  className={styles.image}
                />
              </td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <button
                  className={`${styles.btn} ${styles["btn-edit"]}`}
                  onClick={() => console.log(`Chỉnh sửa khách hàng: ${customer.id}`)}
                >
                  Chỉnh Sửa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
