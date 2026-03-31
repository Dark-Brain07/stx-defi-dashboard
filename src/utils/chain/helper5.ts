export const toMicroSTX5=(stx:number):bigint=>BigInt(Math.round(stx*1e6));
export const fromMicroSTX5=(micro:string):number=>parseInt(micro)/1e6;
export const shortenAddr5=(addr:string,chars=4):string=>addr.slice(0,chars+2)+'...'+addr.slice(-chars);
export const isValidSTXAddr5=(addr:string):boolean=>/^S[PM][A-Z0-9]{38,40}$/.test(addr);