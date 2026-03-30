export interface ChainhookConfig {
  uuid: string;
  name: string;
  chain: 'stacks';
  version: 1;
  networks: {
    mainnet: {
      if_this: { scope: string; actions?: string[]; asset_identifier?: string; contract_identifier?: string };
      then_that: { http_post: { url: string; authorization_header: string } };
      start_block?: number;
    };
  };
}

export class ChainhookManager {
  private hooks: ChainhookConfig[] = [];

  createFTTransferHook(name: string, webhookUrl: string, apiKey: string, assetId: string): ChainhookConfig {
    const hook: ChainhookConfig = {
      uuid: crypto.randomUUID?.() || Math.random().toString(36).slice(2),
      name, chain: 'stacks', version: 1,
      networks: { mainnet: {
        if_this: { scope: 'ft_event', actions: ['transfer'], asset_identifier: assetId },
        then_that: { http_post: { url: webhookUrl, authorization_header: 'Bearer ' + apiKey } }
      }}
    };
    this.hooks.push(hook);
    return hook;
  }

  createNFTHook(name: string, webhookUrl: string, apiKey: string): ChainhookConfig {
    const hook: ChainhookConfig = {
      uuid: crypto.randomUUID?.() || Math.random().toString(36).slice(2),
      name, chain: 'stacks', version: 1,
      networks: { mainnet: {
        if_this: { scope: 'nft_event', actions: ['mint', 'transfer', 'burn'] },
        then_that: { http_post: { url: webhookUrl, authorization_header: 'Bearer ' + apiKey } }
      }}
    };
    this.hooks.push(hook);
    return hook;
  }

  createContractCallHook(name: string, webhookUrl: string, apiKey: string, contractId: string): ChainhookConfig {
    const hook: ChainhookConfig = {
      uuid: crypto.randomUUID?.() || Math.random().toString(36).slice(2),
      name, chain: 'stacks', version: 1,
      networks: { mainnet: {
        if_this: { scope: 'contract_call', contract_identifier: contractId },
        then_that: { http_post: { url: webhookUrl, authorization_header: 'Bearer ' + apiKey } }
      }}
    };
    this.hooks.push(hook);
    return hook;
  }

  getAll(): ChainhookConfig[] { return [...this.hooks]; }
  remove(uuid: string) { this.hooks = this.hooks.filter(h => h.uuid !== uuid); }
}