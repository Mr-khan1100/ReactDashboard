import React from "react";
import "../componentStyling/SalesCard.css"; // Importing CSS

const SalesCard = ({ icon, value, label, change, bgColor, iconBg }) => {
    return (
        <div className="sales-card" style={{ backgroundColor: bgColor }}>
            <div className="sales-card-icon" style={{ backgroundColor: iconBg }}>{icon}</div>
            <h2 className="sales-card-value">{value}</h2>
            <p className="sales-card-label">{label}</p>
            <p className="sales-card-change">Last day {change}</p>
        </div>
    );
};

export default SalesCard;
