'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: '2019', investment: 4000 },
  { name: '2020', investment: 3000 },
  { name: '2021', investment: 2000 },
  { name: '2022', investment: 2780 },
  { name: '2023', investment: 1890 },
  { name: '2024', investment: 2390 },
  { name: '2025', investment: 3490 },
];

export default function InvestmentChart() {
  return (
    <div className="h-[300px] w-full bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
      <h3 className="text-sm font-semibold mb-4 text-slate-500 uppercase tracking-wider">Investment Growth (USD)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
            }} 
          />
          <Area 
            type="monotone" 
            dataKey="investment" 
            stroke="#2563eb" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorInv)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
