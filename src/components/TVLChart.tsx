'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface TVLDataPoint { date: string; tvl: number; }
interface Props { data: TVLDataPoint[]; title?: string; }

export function TVLChart({ data, title = 'Total Value Locked' }: Props) {
  const formatValue = (val: number) => val >= 1e6 ? (val / 1e6).toFixed(2) + 'M' : val >= 1e3 ? (val / 1e3).toFixed(1) + 'K' : val.toFixed(0);
  return (
    <div className="bg-stacks-gray rounded-xl p-6 border border-white/5">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs><linearGradient id="tvlGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5546FF" stopOpacity={0.3}/><stop offset="95%" stopColor="#5546FF" stopOpacity={0}/>
          </linearGradient></defs>
          <XAxis dataKey="date" stroke="#666" fontSize={12}/>
          <YAxis stroke="#666" fontSize={12} tickFormatter={formatValue}/>
          <Tooltip contentStyle={{background:'#1A1A2E',border:'1px solid #333',borderRadius:'8px'}} labelStyle={{color:'#fff'}} formatter={(v:number)=>['$'+formatValue(v),'TVL']}/>
          <Area type="monotone" dataKey="tvl" stroke="#5546FF" fill="url(#tvlGrad)" strokeWidth={2}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}