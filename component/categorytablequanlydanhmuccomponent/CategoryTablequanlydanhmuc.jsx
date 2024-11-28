"use client"
import { useState } from 'react';
import styles from './CategoryTablequanlydanhmuc.module.css';  // Import CSS Modules

const CategoryTable = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Cà phê', description: 'Danh mục các sản phẩm cà phê.' },
    { id: 2, name: 'Trà sữa', description: 'Danh mục các sản phẩm trà sữa.' },
  ]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên Danh Mục</th>
          <th>Mô Tả</th>
          <th>Chỉnh Sửa</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td>
              <button className={`${styles.btn} ${styles['btn-edit']}`} onClick={() => handleEdit(category.id)}>Chỉnh Sửa</button>
            </td>
            <td>
              <button className={`${styles.btn} ${styles['btn-delete']}`} onClick={() => handleDelete(category.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;
