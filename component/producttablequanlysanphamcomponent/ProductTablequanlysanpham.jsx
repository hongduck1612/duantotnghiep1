"use client";
import { useState } from "react";
import styles from "./ProductTablequanlysanpham.module.css"; // Import CSS Modules

const ProductTable = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Salted Egg Coffee",
      price: "30,000 VND",
      description: "Món cà phê trứng mặn độc đáo, béo ngậy và đậm đà hương vị.",
      image: "/images/salted-egg-coffee.jpg",
    },
    {
      id: 2,
      name: "Milk Tea",
      price: "25,000 VND",
      description: "Trà sữa thơm ngon, béo ngậy, phù hợp mọi lứa tuổi.",
      image: "/images/milk-tea.jpg",
    },
  ]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Ảnh Sản Phẩm</th>
          <th>Tên Sản Phẩm</th>
          <th>Giá</th>
          <th>Mô Tả</th>
          <th>Chỉnh Sửa</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
            </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
              <button
                className={`${styles.btn} ${styles["btn-edit"]}`}
                onClick={() => handleEdit(product.id)}
              >
                Chỉnh Sửa
              </button>
            </td>
            <td>
              <button
                className={`${styles.btn} ${styles["btn-delete"]}`}
                onClick={() => handleDelete(product.id)}
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
