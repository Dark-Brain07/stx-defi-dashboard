'use client';

interface StatCard { label: string; value: string; change?: number; icon: string; }
interface Props { stats: StatCard[]; }

export function StatsCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(s=>(
        <div key={s.label} className="bg-stacks-gray rounded-xl p-5 border border-white/5 hover:border-stacks-purple/30 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{s.icon}</span>
            {s.change!==undefined&&<span className={`text-sm px-2 py-0.5 rounded ${s.change>=0?'bg-green-500/10 text-green-400':'bg-red-500/10 text-red-400'}`}>
              {s.change>=0?'+':''}{s.change.toFixed(1)}%</span>}
          </div>
          <div className="text-2xl font-bold text-white">{s.value}</div>
          <div className="text-sm text-gray-400 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}