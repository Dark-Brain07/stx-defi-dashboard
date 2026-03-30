import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'STX DeFi Dashboard | Real-time Stacks Analytics',
  description: 'Real-time DeFi analytics dashboard for the Stacks blockchain. Track TVL, protocol rankings, wallet portfolio, and on-chain activity powered by Hiro Chainhooks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body className="bg-stacks-dark text-white min-h-screen antialiased">
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold bg-gradient-to-r from-stacks-purple to-stacks-accent bg-clip-text text-transparent">STX DeFi</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-gray-400 hover:text-white transition">Dashboard</a>
            <a href="/protocols" className="text-sm text-gray-400 hover:text-white transition">Protocols</a>
            <a href="/wallet" className="text-sm text-gray-400 hover:text-white transition">Wallet</a>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </body></html>
  );
}