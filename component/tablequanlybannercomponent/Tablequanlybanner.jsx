"use client";

import { useState } from "react";
import styles from "./Tablequanlybanner.module.css"; // Ensure this file exists

const BannerManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [banners, setBanners] = useState({
    default: [],
    category1: [],
    category2: [],
    category3: []
  });
  const [fileInput] = useState(null); // To hold reference to file input

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);
    setBanners((prevBanners) => ({
      ...prevBanners,
      [selectedCategory]: [...prevBanners[selectedCategory], fileURL]
    }));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddBannerClick = () => {
    fileInput.current.click();
  };


  return (
    <div className={styles.container}>
      <h1 className="text-xl font-bold mb-4">Quản Lý Banner</h1>
      <div className="mb-4">
        <label htmlFor="categorySelect" className="block font-medium mb-2">Chọn Thư Mục Banner</label>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        >
          <option value="default">Mặc định</option>
          <option value="category1">Danh Mục 1</option>
          <option value="category2">Danh Mục 2</option>
          <option value="category3">Danh Mục 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="bannerFile" className="block font-medium mb-2">Thêm Banner mới</label>
        <input
          type="file"
          id="bannerFile"
          className="border border-gray-300 p-2 rounded-md w-full"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <button 
        className={`${styles.btnAdd} mt-4`} 
        onClick={handleAddBannerClick}
      >
        Thêm Banner
      </button>

      <input
        type="file"
        ref={fileInput}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Danh Mục</th>
            <th>Hình ảnh</th>
            <th>Chỉnh sửa</th>
          </tr>
        </thead>
        <tbody>
          {banners[selectedCategory].map((banner, index) => (
            <tr key={index}>
              <td>{selectedCategory}</td>
              <td>
                <img src={banner} alt="Banner" className="w-32 h-16 object-cover" />
              </td>
              <td>
                <button
                  className={styles.btnDelete}
                  onClick={() => handleDeleteBanner(selectedCategory, index)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BannerManagement;
