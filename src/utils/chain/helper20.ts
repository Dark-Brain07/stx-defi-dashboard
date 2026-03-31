export const toMicroSTX20=(stx:number):bigint=>BigInt(Math.round(stx*1e6));
export const fromMicroSTX20=(micro:string):number=>parseInt(micro)/1e6;
export const shortenAddr20=(addr:string,chars=4):string=>addr.slice(0,chars+2)+'...'+addr.slice(-chars);
export const isValidSTXAddr20=(addr:string):boolean=>/^S[PM][A-Z0-9]{38,40}$/.test(addr);