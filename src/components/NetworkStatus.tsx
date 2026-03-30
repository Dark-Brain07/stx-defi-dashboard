'use client';
export function NetworkStatus({ blockHeight, peerCount, mempoolSize }: { blockHeight: number; peerCount: number; mempoolSize: number }) {
  return (
    <div className="bg-stacks-gray rounded-xl p-4 border border-white/5 flex items-center gap-6">
      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/><span className="text-sm text-gray-400">Mainnet</span></div>
      <div className="text-sm"><span className="text-gray-400">Block: </span><span className="text-white font-mono">{blockHeight.toLocaleString()}</span></div>
      <div className="text-sm"><span className="text-gray-400">Mempool: </span><span className="text-white">{mempoolSize}</span></div>
    </div>
  );
}