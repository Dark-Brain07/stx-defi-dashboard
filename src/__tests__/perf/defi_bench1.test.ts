import{describe,it,expect}from"vitest";
describe("defi bench 1",()=>{it("price calc",()=>{const p=Array.from({length:100000},(_,j)=>j*0.001*1).reduce((a,b)=>a+b,0);expect(p).toBeGreaterThan(0);});});