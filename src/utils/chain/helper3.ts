export const toMicroSTX3=(stx:number):bigint=>BigInt(Math.round(stx*1e6));
export const fromMicroSTX3=(micro:string):number=>parseInt(micro)/1e6;
export const shortenAddr3=(addr:string,chars=4):string=>addr.slice(0,chars+2)+'...'+addr.slice(-chars);
export const isValidSTXAddr3=(addr:string):boolean=>/^S[PM][A-Z0-9]{38,40}$/.test(addr);