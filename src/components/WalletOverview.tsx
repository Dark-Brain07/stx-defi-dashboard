'use client';

interface TokenBalance { symbol: string; balance: string; usdValue?: number; }
interface Props { address: string; stxBalance: string; tokens: TokenBalance[]; stxPrice: number; }

export function WalletOverview({ address, stxBalance, tokens, stxPrice }: Props) {
  const stxUsd = (parseFloat(stxBalance) / 1e6) * stxPrice;
  const totalUsd = stxUsd + tokens.reduce((s, t) => s + (t.usdValue || 0), 0);
  return (
    <div className="bg-stacks-gray rounded-xl p-6 border border-white/5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Wallet Portfolio</h3>
        <span className="text-sm text-gray-400 font-mono">{address.slice(0,8)}...{address.slice(-6)}</span>
      </div>
      <div className="text-3xl font-bold text-white mb-1">${totalUsd.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
      <div className="text-sm text-gray-400 mb-6">Total Portfolio Value</div>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
          <div><div className="text-white font-medium">STX</div><div className="text-xs text-gray-400">{(parseFloat(stxBalance)/1e6).toFixed(4)} STX</div></div>
          <div className="text-right"><div className="text-white">${stxUsd.toFixed(2)}</div><div className="text-xs text-gray-400">${stxPrice.toFixed(4)}</div></div>
        </div>
        {tokens.map(t=>(
          <div key={t.symbol} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
            <div className="text-white font-medium">{t.symbol}</div>
            <div className="text-white">{t.balance}</div>
          </div>
        ))}
      </div>
    </div>
  );
}