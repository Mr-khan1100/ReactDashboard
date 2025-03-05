import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import '../componentStyling/VisitorInsightsChart.css';
const data = [
  { name: "Jan", Loyal: 300, New: 200, Unique: 250 },
  { name: "Feb", Loyal: 320, New: 210, Unique: 280 },
  { name: "Mar", Loyal: 290, New: 180, Unique: 260 },
  { name: "Apr", Loyal: 270, New: 160, Unique: 240 },
  { name: "May", Loyal: 200, New: 180, Unique: 220 },
  { name: "Jun", Loyal: 220, New: 200, Unique: 230 },
  { name: "Jul", Loyal: 250, New: 220, Unique: 270 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-box">
        <p>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: <b>{entry.value}</b>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const VisitorInsightsChart = () => {
  return (
    <div className="chart-wrapper1">
    <h2>Visitor Insights</h2>
    <div className="chart-container1">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="natural" dataKey="Loyal" stroke="purple" strokeWidth={5} dot={{ r: 5 }} />
          <Line type="natural" dataKey="New" stroke="red" strokeWidth={5} dot={{ r: 5 }} />
          <Line type="natural" dataKey="Unique" stroke="green" strokeWidth={5} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
  );
};

export default VisitorInsightsChart;
