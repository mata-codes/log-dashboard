import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const statusData = [
  { name: 'Info', count: 120 }, { name: 'Error', count: 15 }, 
  { name: 'Warn', count: 34 }, { name: 'Debug', count: 85 }
];

const processData = [
  { name: 'auth-svc', count: 45 }, { name: 'db-worker', count: 90 }, 
  { name: 'payment-api', count: 30 }, { name: 'mail-queue', count: 65 }
];

const ipData = [
  { name: '192.168.1.10', count: 150 }, { name: '10.0.0.5', count: 80 }, 
  { name: '172.16.0.4', count: 40 }
];

export const AnalyticsPage: React.FC = () => {
  // Componente reutilizable para los gráficos
  const ChartCard = ({ title, data }: { title: string, data: any[] }) => (
    <div className="card">
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--gray-700)' }}>{title}</h3>
      <div style={{ height: '250px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--gray-200)" />
            <XAxis dataKey="name" tick={{fill: 'var(--gray-600)', fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis tick={{fill: 'var(--gray-600)', fontSize: 12}} axisLine={false} tickLine={false} />
            <Tooltip cursor={{fill: 'var(--gray-50)'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}} />
            <Bar dataKey="count" fill="var(--gray-800)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h2 style={{ marginBottom: '2rem' }}>Analytics Dashboard</h2>
      
      <div className="grid-2">
        <ChartCard title="Logs by Status" data={statusData} />
        <ChartCard title="Events by Process" data={processData} />
      </div>
      
      <div className="grid-1" style={{ marginTop: '1.5rem' }}>
        <ChartCard title="Traffic by IP Address" data={ipData} />
      </div>
    </div>
  );
};
