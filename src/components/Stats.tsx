import React from 'react';
import { Activity, Cpu, Network, Zap, Timer, Database } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: string;
  color?: string;
}

function StatCard({ title, value, icon: Icon, trend, color = 'indigo' }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105">
      <div className="flex items-center">
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {trend && (
            <p className={`text-sm ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {trend}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard
        title="Quantum Coherence"
        value="99.9%"
        icon={Activity}
        trend="+2.1% from last week"
        color="green"
      />
      <StatCard
        title="System Performance"
        value="92.3%"
        icon={Cpu}
        trend="+1.2% from last week"
        color="blue"
      />
      <StatCard
        title="Neural Stability"
        value="95.1%"
        icon={Network}
        trend="+3.4% from last week"
        color="purple"
      />
      <StatCard
        title="Processing Power"
        value="78.4 TFLOPS"
        icon={Zap}
        trend="-0.8% from last hour"
        color="yellow"
      />
      <StatCard
        title="Response Time"
        value="12ms"
        icon={Timer}
        trend="+5% from last hour"
        color="pink"
      />
      <StatCard
        title="Data Throughput"
        value="1.2 TB/s"
        icon={Database}
        trend="+15% from last day"
        color="indigo"
      />
    </div>
  );
}