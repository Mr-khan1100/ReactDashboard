import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import '../componentStyling/WeeklySalesChart.css';
const weeklySalesData = [
    { week: "Week 1", Online: 4000, Offline: 2400, Total: 6400 },
    { week: "Week 2", Online: 3000, Offline: 1398, Total: 4398 },
    { week: "Week 3", Online: 2000, Offline: 9800, Total: 11800 },
    { week: "Week 4", Online: 2780, Offline: 3908, Total: 6688 },
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
  
const WeeklySalesChart = () => {
  return (
    <div className="chart-wrapper">
      <h2>Weekly Sales Overview</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklySalesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Online" stackId="a" fill="#8884d8"  radius={[0, 0, 0, 0]} />
            <Bar dataKey="Offline" stackId="a" fill="#82ca9d"  radius={[10, 10, 0, 0]} />
            <Bar dataKey="Total" fill="#ffc658" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklySalesChart;
