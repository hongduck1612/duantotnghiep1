"use client";

import { useState } from "react";
import styles from "./EditTablethemxoasua.module.css";

const OrderTable = () => {
  const [products] = useState([
    {
      img: "sanpham1",
      customerName: "Sản Phẩm 1",
      total: "30,000 VND",
    },
    {
      img: "sanpham2",
      customerName: "Sản Phẩm 2",
      total: "50,000 VND",
    },
  ]);

  return (
    <div className={styles.container}>
      <button onClick={() => console.log("Thêm sản phẩm mới")} className={styles.addButton}>
        Thêm Sản Phẩm
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ảnh sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Chỉnh Sửa</th>
            <th>Xoá</th>
          </tr>
        </thead>
        <tbody>
          {products.map((edit) => (
            <tr key={edit.id}>
              <td>{edit.img}</td>
              <td>{edit.customerName}</td>
              <td>{edit.total}</td>
              <td>
                <button
                  onClick={() => updateProductStatus(edit.id)}
                  className={`${styles.btn} ${styles.update}`}
                >
                  Chỉnh Sửa
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteProduct(edit.id)}
                  className={`${styles.btn} ${styles.process}`}
                >
                  Xoá
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
