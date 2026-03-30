import axios from 'axios';

export interface Protocol {
  name: string;
  slug: string;
  tvl: number;
  tvlChange24h: number;
  category: 'dex' | 'lending' | 'staking' | 'bridge' | 'yield';
  contractAddress?: string;
}

export interface LiquidityPool {
  id: string;
  protocol: string;
  token0: { symbol: string; address: string };
  token1: { symbol: string; address: string };
  tvl: number;
  apr: number;
  volume24h: number;
  feeTier: number;
}

export interface YieldFarm {
  name: string;
  protocol: string;
  apr: number;
  tvl: number;
  rewardToken: string;
  stakingToken: string;
  lockPeriod?: number;
}

export class DeFiProtocols {
  private protocols: Protocol[] = [
    { name: 'ALEX', slug: 'alex', tvl: 0, tvlChange24h: 0, category: 'dex' },
    { name: 'Arkadiko', slug: 'arkadiko', tvl: 0, tvlChange24h: 0, category: 'lending' },
    { name: 'StackingDAO', slug: 'stacking-dao', tvl: 0, tvlChange24h: 0, category: 'staking' },
    { name: 'Velar', slug: 'velar', tvl: 0, tvlChange24h: 0, category: 'dex' },
    { name: 'Bitflow', slug: 'bitflow', tvl: 0, tvlChange24h: 0, category: 'dex' },
    { name: 'Zest Protocol', slug: 'zest', tvl: 0, tvlChange24h: 0, category: 'lending' },
    { name: 'StacksBridge', slug: 'stacks-bridge', tvl: 0, tvlChange24h: 0, category: 'bridge' },
  ];

  async fetchTVL(): Promise<Protocol[]> {
    try {
      const res = await axios.get('https://api.llama.fi/protocols');
      const stacksProtocols = res.data.filter((p: any) => p.chains?.includes('Stacks'));
      stacksProtocols.forEach((sp: any) => {
        const match = this.protocols.find(p => p.slug === sp.slug);
        if (match) { match.tvl = sp.tvl || 0; match.tvlChange24h = sp.change_1d || 0; }
      });
    } catch {}
    return this.protocols;
  }

  async getTotalTVL(): Promise<number> {
    const protocols = await this.fetchTVL();
    return protocols.reduce((sum, p) => sum + p.tvl, 0);
  }

  getByCategory(category: Protocol['category']): Protocol[] {
    return this.protocols.filter(p => p.category === category);
  }

  getTopByTVL(limit = 5): Protocol[] {
    return [...this.protocols].sort((a, b) => b.tvl - a.tvl).slice(0, limit);
  }
}