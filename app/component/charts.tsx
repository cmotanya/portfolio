import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarCharts() {
  const data = [
    {
      name: "Search Engine",
      "with website": 72,
      "without website": 23,
    },
    {
      name: "Social media",
      "with website": 96,
      "without website": 4,
    },
    {
      name: "Email Inquiry",
      "with website": 78,
      "without website": 22,
    },
    {
      name: "Website Traffic",
      "with website": 100,
      "without website": 0,
    },
    {
      name: "Online Reviews",
      "with website": 88,
      "without website": 12,
    },
  ];

  const mobile = [
    {
      name: "S",
      "with website": 72,
      "without website": 23,
    },
    {
      name: "Social media",
      "with website": 96,
      "without website": 4,
    },
    {
      name: "Email Inquiry",
      "with website": 78,
      "without website": 22,
    },
    {
      name: "Website Traffic",
      "with website": 100,
      "without website": 0,
    },
    {
      name: "Online Reviews",
      "with website": 88,
      "without website": 12,
    },
  ];
  return (
    <ResponsiveContainer
      width="100%"
      height={280}
      className="mx-auto hidden md:block"
    >
      <AreaChart
        width={730}
        height={280}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="with website"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="without website"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default BarCharts;
