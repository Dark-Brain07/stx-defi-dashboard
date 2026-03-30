import { NextResponse } from 'next/server';
import { StacksAPI } from '@/lib/stacks-api';

export async function GET() {
  const api = new StacksAPI();
  const [blockHeight, networkInfo, mempool, price] = await Promise.all([
    api.getBlockHeight(), api.getNetworkInfo(), api.getMempoolStats(), api.getSTXPrice()
  ]);
  return NextResponse.json({ blockHeight, networkInfo, mempool, price, timestamp: Date.now() });
}