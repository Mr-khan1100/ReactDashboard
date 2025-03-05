import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import  '../componentStyling/CustomerSatisfactionChart.css';
const satisfactionData = [
    { week: "Week 1", LastMonth: 78, CurrentMonth: 85 },
    { week: "Week 2", LastMonth: 80, CurrentMonth: 88 },
    { week: "Week 3", LastMonth: 75, CurrentMonth: 83 },
    { week: "Week 4", LastMonth: 82, CurrentMonth: 86 },
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

function CustomerSatisfactionChart() {
  return (
    <div className="chart-wrapper2">
      <h2>Customer Satisfaction Comparison</h2>
      <div className="chart-container2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={satisfactionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="LastMonth" stroke="red" strokeWidth={3} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="CurrentMonth" stroke="green" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CustomerSatisfactionChart