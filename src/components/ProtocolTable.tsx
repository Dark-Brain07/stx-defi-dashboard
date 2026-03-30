'use client';

interface Protocol { name: string; tvl: number; tvlChange24h: number; category: string; }
interface Props { protocols: Protocol[]; }

export function ProtocolTable({ protocols }: Props) {
  const fmt = (v: number) => v >= 1e6 ? '$' + (v/1e6).toFixed(2) + 'M' : '$' + (v/1e3).toFixed(1) + 'K';
  return (
    <div className="bg-stacks-gray rounded-xl border border-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/5"><h3 className="text-lg font-semibold text-white">Stacks DeFi Protocols</h3></div>
      <table className="w-full">
        <thead><tr className="text-gray-400 text-sm border-b border-white/5">
          <th className="text-left p-4">#</th><th className="text-left p-4">Protocol</th>
          <th className="text-right p-4">TVL</th><th className="text-right p-4">24h Change</th>
          <th className="text-left p-4">Category</th>
        </tr></thead>
        <tbody>{protocols.map((p, i) => (
          <tr key={p.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
            <td className="p-4 text-gray-400">{i+1}</td>
            <td className="p-4 text-white font-medium">{p.name}</td>
            <td className="p-4 text-right text-white">{fmt(p.tvl)}</td>
            <td className={`p-4 text-right ${p.tvlChange24h>=0?'text-green-400':'text-red-400'}`}>
              {p.tvlChange24h>=0?'+':''}{p.tvlChange24h.toFixed(2)}%
            </td>
            <td className="p-4"><span className="px-2 py-1 bg-stacks-purple/20 text-stacks-purple rounded text-xs">{p.category}</span></td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}