import { NextResponse } from 'next/server';
import { DeFiProtocols } from '@/lib/defi-protocols';

export async function GET() {
  const defi = new DeFiProtocols();
  const protocols = await defi.fetchTVL();
  const totalTVL = await defi.getTotalTVL();
  return NextResponse.json({ totalTVL, protocols, timestamp: Date.now() });
}