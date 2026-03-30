import { showConnect } from '@stacks/connect';
import { StacksMainnet, StacksTestnet } from '@stacks/network';

export interface WalletState {
  connected: boolean;
  address: string | null;
  network: 'mainnet' | 'testnet';
  stxBalance: string;
}

export class WalletService {
  private state: WalletState = { connected: false, address: null, network: 'mainnet', stxBalance: '0' };

  async connect(appName: string, iconUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
      showConnect({
        appDetails: { name: appName, icon: iconUrl },
        onFinish: ({ userSession }) => {
          const userData = userSession.loadUserData();
          this.state = {
            connected: true,
            address: userData.profile.stxAddress.mainnet,
            network: 'mainnet',
            stxBalance: '0'
          };
          resolve(this.state.address!);
        },
        onCancel: () => reject(new Error('Connection cancelled')),
      });
    });
  }

  disconnect() { this.state = { connected: false, address: null, network: 'mainnet', stxBalance: '0' }; }
  getState(): WalletState { return { ...this.state }; }
  isConnected(): boolean { return this.state.connected; }
  getAddress(): string | null { return this.state.address; }
  getNetwork() { return this.state.network === 'mainnet' ? new StacksMainnet() : new StacksTestnet(); }
}