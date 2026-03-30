export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Stacks DeFi Dashboard</h1>
          <p className="text-gray-400 mt-1">Real-time analytics powered by Hiro Chainhooks</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[{icon:'💰',label:'Total TVL',value:'$142.5M',change:3.2},{icon:'📊',label:'24h Volume',value:'$18.7M',change:-1.5},
          {icon:'👥',label:'Active Wallets',value:'12,847',change:8.4},{icon:'⛏️',label:'Block Height',value:'184,205'}].map(s=>(
          <div key={s.label} className="bg-stacks-gray rounded-xl p-5 border border-white/5">
            <span className="text-2xl">{s.icon}</span>
            <div className="text-2xl font-bold text-white mt-2">{s.value}</div>
            <div className="text-sm text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-stacks-gray rounded-xl p-6 border border-white/5">
          <h3 className="text-lg font-semibold mb-4">Top Protocols by TVL</h3>
          {['ALEX DEX','Arkadiko','StackingDAO','Velar','Bitflow'].map((p,i)=>(
            <div key={p} className="flex justify-between py-3 border-b border-white/5 last:border-0">
              <span className="text-gray-400">{i+1}. {p}</span>
              <span className="text-white">${(50-i*8).toFixed(1)}M</span>
            </div>
          ))}
        </div>
        <div className="bg-stacks-gray rounded-xl p-6 border border-white/5">
          <h3 className="text-lg font-semibold mb-4">Network Activity</h3>
          <div className="space-y-4">
            <div className="flex justify-between"><span className="text-gray-400">Avg Block Time</span><span className="text-white">~10 min</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Pending Transactions</span><span className="text-white">247</span></div>
            <div className="flex justify-between"><span className="text-gray-400">STX Price</span><span className="text-white">$1.42</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Market Cap</span><span className="text-white">$2.1B</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}