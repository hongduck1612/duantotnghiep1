"use client";
import React, { useEffect } from "react";
import styles from "./Charttongquan.module.css";
import Chart from "chart.js/auto"; // Đảm bảo bạn đã cài Chart.js: `npm install chart.js`

const ChartComponent = () => {
  useEffect(() => {
    // Dữ liệu biểu đồ
    const dailyStatsData = {
      labels: ["Sản phẩm mới thêm", "Sản phẩm đã bán", "Tài khoản đăng ký"],
      datasets: [
        {
          label: "Số lượng / Doanh thu",
          data: [5, 20, 3],
          backgroundColor: ["#4CAF50", "#2196F3", "#FFEB3B"],
          borderColor: ["#388E3C", "#1976D2", "#FBC02D"],
          borderWidth: 1,
        },
      ],
    };

    // Cấu hình biểu đồ
    const dailyStatsConfig = {
      type: "bar",
      data: dailyStatsData,
      options: {
        responsive: true,
        maintainAspectRatio: false, // Tắt tự động duy trì tỷ lệ
        plugins: {
          legend: {
            labels: {
              color: "#333",
              font: {
                size: 14,
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#555",
              font: {
                size: 12,
              },
            },
            grid: {
              color: "#eee",
            },
          },
          y: {
            ticks: {
              color: "#555",
              font: {
                size: 12,
              },
            },
            grid: {
              color: "#eee",
            },
          },
        },
      },
    };

    // Khởi tạo biểu đồ
    const ctx = document.getElementById("dailyStatsChart").getContext("2d");
    new Chart(ctx, dailyStatsConfig);
  }, []);

  return (
    <div className={styles.chartContainer}>
      <canvas
        id="dailyStatsChart"
        className={styles.chart}
        style={{ width: "400px", height: "300px" }}
      ></canvas>
    </div>
  );
};

export default ChartComponent;
