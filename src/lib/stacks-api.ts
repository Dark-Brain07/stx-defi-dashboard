import axios from 'axios';

const HIRO_API = 'https://api.hiro.so';
const ALEX_API = 'https://api.alexgo.io';

export interface TokenBalance {
  token: string;
  balance: string;
  decimals: number;
  symbol: string;
  usdValue?: number;
}

export interface Transaction {
  txId: string;
  type: string;
  sender: string;
  recipient?: string;
  amount?: string;
  blockHeight: number;
  blockTime: number;
  status: 'success' | 'pending' | 'failed';
  fee: string;
}

export interface PoolData {
  token0: string;
  token1: string;
  reserve0: string;
  reserve1: string;
  tvl: number;
  apr: number;
  volume24h: number;
}

export interface StxPrice {
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
}

export class StacksAPI {
  private baseUrl: string;

  constructor(network: 'mainnet' | 'testnet' = 'mainnet') {
    this.baseUrl = network === 'mainnet' ? HIRO_API : 'https://api.testnet.hiro.so';
  }

  async getBalance(address: string): Promise<{ stx: string; fungible: TokenBalance[] }> {
    const res = await axios.get(`${this.baseUrl}/extended/v1/address/${address}/balances`);
    const stxBalance = res.data.stx?.balance || '0';
    const fungible: TokenBalance[] = Object.entries(res.data.fungible_tokens || {}).map(([key, val]: [string, any]) => ({
      token: key.split('::')[0],
      balance: val.balance,
      decimals: 6,
      symbol: key.split('::')[1] || 'UNKNOWN',
    }));
    return { stx: stxBalance, fungible };
  }

  async getTransactions(address: string, limit = 20): Promise<Transaction[]> {
    const res = await axios.get(`${this.baseUrl}/extended/v1/address/${address}/transactions?limit=${limit}`);
    return (res.data.results || []).map((tx: any) => ({
      txId: tx.tx_id,
      type: tx.tx_type,
      sender: tx.sender_address,
      recipient: tx.token_transfer?.recipient_address,
      amount: tx.token_transfer?.amount,
      blockHeight: tx.block_height,
      blockTime: tx.burn_block_time,
      status: tx.tx_status === 'success' ? 'success' : tx.tx_status === 'pending' ? 'pending' : 'failed',
      fee: tx.fee_rate,
    }));
  }

  async getSTXPrice(): Promise<StxPrice> {
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=blockstack&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true');
      const data = res.data.blockstack;
      return { price: data.usd, change24h: data.usd_24h_change, marketCap: data.usd_market_cap, volume24h: data.usd_24h_vol };
    } catch { return { price: 0, change24h: 0, marketCap: 0, volume24h: 0 }; }
  }

  async getBlockHeight(): Promise<number> {
    const res = await axios.get(`${this.baseUrl}/extended/v1/block?limit=1`);
    return res.data.results?.[0]?.height || 0;
  }

  async getNetworkInfo() {
    const res = await axios.get(`${this.baseUrl}/v2/info`);
    return { peerVersion: res.data.peer_version, burnBlockHeight: res.data.burn_block_height, stableBlockHeight: res.data.stable_pox_consensus };
  }

  async getContractInfo(contractId: string) {
    const res = await axios.get(`${this.baseUrl}/extended/v1/contract/${contractId}`);
    return res.data;
  }

  async getMempoolStats() {
    const res = await axios.get(`${this.baseUrl}/extended/v1/tx/mempool/stats`);
    return res.data;
  }
}