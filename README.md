# STX DeFi Dashboard

Real-time DeFi analytics dashboard for the **Stacks blockchain**, powered by Hiro Chainhooks.

## Features

- 📊 **TVL Tracking** — Real-time Total Value Locked across Stacks DeFi protocols
- 💰 **Protocol Rankings** — ALEX, Arkadiko, StackingDAO, Velar, Bitflow
- 👛 **Wallet Analytics** — Portfolio tracking with token balances and transaction history
- ⚡ **Chainhooks Integration** — Real-time on-chain event streaming via Hiro
- 📈 **Price Analytics** — STX price, market cap, and volume data
- 🔗 **Network Status** — Block height, mempool stats, and network health

## Tech Stack

- **Frontend:** Next.js 14, React 18, TailwindCSS, Recharts
- **Blockchain:** Stacks API, Hiro Chainhooks, Clarity smart contracts
- **Data:** CoinGecko API, DeFiLlama API, Stacks Blockchain API

## Architecture

```
Stacks Blockchain → Hiro Chainhooks → Webhook API → Dashboard
        ↓
   Stacks API → REST Endpoints → React Components
        ↓
   DeFiLlama → TVL Data → Protocol Rankings
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| GET /api/tvl | Total Value Locked across protocols |
| GET /api/wallet/:address | Wallet balances and transactions |
| GET /api/network | Network status and STX price |
| POST /api/chainhooks/webhook | Chainhook event ingestion |

## Environment Variables

```......
CHAINHOOK_API_KEY=your_api_key
NEXT_PUBLIC_NETWORK=mainnet
```

## License

MIT © Dark-Brain07
