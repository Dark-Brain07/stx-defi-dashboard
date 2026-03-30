import { NextResponse } from 'next/server';
import { StacksAPI } from '@/lib/stacks-api';

export async function GET(_req: Request, { params }: { params: { address: string } }) {
  const api = new StacksAPI();
  const [balance, transactions] = await Promise.all([
    api.getBalance(params.address),
    api.getTransactions(params.address)
  ]);
  return NextResponse.json({ address: params.address, balance, transactions, timestamp: Date.now() });
}