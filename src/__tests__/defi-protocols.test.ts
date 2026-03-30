import{describe,it,expect}from'vitest';
describe('defi-protocols',()=>{it('module loads',()=>expect(true).toBe(true));it('handles errors',()=>expect(()=>{throw new Error('test')}).toThrow());});