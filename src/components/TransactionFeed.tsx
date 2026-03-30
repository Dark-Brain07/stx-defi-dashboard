'use client';

interface Transaction { txId: string; type: string; sender: string; amount?: string; status: string; blockTime: number; }
interface Props { transactions: Transaction[]; }

export function TransactionFeed({ transactions }: Props) {
  const timeAgo = (ts: number) => { const d = Date.now()/1000-ts; if(d<60)return Math.floor(d)+'s ago'; if(d<3600)return Math.floor(d/60)+'m ago'; return Math.floor(d/3600)+'h ago'; };
  const statusColor = (s: string) => s==='success'?'bg-green-500':s==='pending'?'bg-yellow-500':'bg-red-500';
  return (
    <div className="bg-stacks-gray rounded-xl p-6 border border-white/5">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {transactions.map(tx=>(
          <div key={tx.txId} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${statusColor(tx.status)}`}/>
              <div><div className="text-white text-sm font-mono">{tx.txId.slice(0,10)}...</div>
                <div className="text-xs text-gray-400">{tx.type} • {tx.sender.slice(0,8)}...</div></div>
            </div>
            <div className="text-right"><div className="text-white text-sm">{tx.amount?(parseFloat(tx.amount)/1e6).toFixed(2)+' STX':'-'}</div>
              <div className="text-xs text-gray-400">{timeAgo(tx.blockTime)}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}