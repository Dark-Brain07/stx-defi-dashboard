export const toMicroSTX11=(stx:number):bigint=>BigInt(Math.round(stx*1e6));
export const fromMicroSTX11=(micro:string):number=>parseInt(micro)/1e6;
export const shortenAddr11=(addr:string,chars=4):string=>addr.slice(0,chars+2)+'...'+addr.slice(-chars);
export const isValidSTXAddr11=(addr:string):boolean=>/^S[PM][A-Z0-9]{38,40}$/.test(addr);