export const toMicroSTX18=(stx:number):bigint=>BigInt(Math.round(stx*1e6));
export const fromMicroSTX18=(micro:string):number=>parseInt(micro)/1e6;
export const shortenAddr18=(addr:string,chars=4):string=>addr.slice(0,chars+2)+'...'+addr.slice(-chars);
export const isValidSTXAddr18=(addr:string):boolean=>/^S[PM][A-Z0-9]{38,40}$/.test(addr);