import{describe,it,expect}from"vitest";
describe("defi bench 6",()=>{it("price calc",()=>{const p=Array.from({length:100000},(_,j)=>j*0.001*6).reduce((a,b)=>a+b,0);expect(p).toBeGreaterThan(0);});});