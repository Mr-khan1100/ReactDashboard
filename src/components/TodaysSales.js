import React from "react";
import SalesCard from "./SalesCard";
import "../componentStyling/TodaysSales.css"; // Importing CSS

const salesData = [
  {
    id: 1,
    icon: "📊",
    value: "$1k",
    label: "Total Sales",
    change: "+8%",
    bgColor: "#ffe4e6",
    iconBg: '#f5bbbe',
  },
  {
    id: 2,
    icon: "📄",
    value: "300",
    label: "Total Order",
    change: "+5%",
    bgColor: "#fff7db",
    iconBg: '#f7df8a',
  },
  {
    id: 3,
    icon: "🏷️",
    value: "5",
    label: "Sold",
    change: "+1.2%",
    bgColor: "#d9fdd3",
    iconBg: "#8dea7c",
  },
  {
    id: 4,
    icon: "👤",
    value: "8",
    label: "Customers",
    change: "+0.5%",
    bgColor: "#f3e8ff",
    iconBg: "#b67df4",
  },
];

const TodaysSales = () => {
  return (
    <div className="todays-sales-container">
      <div className="salesText-export-Container">
        <div className="salestext">
          <h2>Today's Sales</h2>
          <p className="sales-summary">Sales Summary</p>
        </div>
        <button className="exportContainer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="iconify iconify--solar MuiBox-root css-0"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
              >
                <path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"></path>
                <path
                  stroke-linejoin="round"
                  d="M12 15V2m0 0l3 3.5M12 2L9 5.5"
                ></path>
              </g>
            </svg>
          </span>
          Export
        </button>
      </div>
      <div className="sales-cards-container">
        {salesData.map((item) => (
          <SalesCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodaysSales;
