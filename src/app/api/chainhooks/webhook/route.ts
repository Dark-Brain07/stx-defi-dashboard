import { NextResponse } from 'next/server';

interface ChainhookPayload { apply: Array<{ transactions: Array<{ metadata: { kind: any; receipt: any } }> }> }

export async function POST(req: Request) {
  const apiKey = req.headers.get('authorization');
  if (!apiKey || apiKey !== 'Bearer ' + process.env.CHAINHOOK_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const payload: ChainhookPayload = await req.json();
  const events = payload.apply?.flatMap(block => block.transactions.map(tx => ({
    kind: tx.metadata.kind,
    receipt: tx.metadata.receipt,
    timestamp: Date.now()
  }))) || [];
  console.log('[Chainhook] Received', events.length, 'events');
  return NextResponse.json({ received: events.length, status: 'processed' });
}