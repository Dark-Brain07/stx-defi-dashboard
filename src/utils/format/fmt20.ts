export const formatUSD20=(v:number)=>'$'+v.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
export const formatPct20=(v:number)=>(v>=0?'+':'')+v.toFixed(2)+'%';
export const formatSTX20=(v:string)=>(parseInt(v)/1e6).toFixed(6)+' STX';