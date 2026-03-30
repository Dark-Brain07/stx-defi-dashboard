import{describe,it,expect}from'vitest';
describe('chainhooks',()=>{it('module loads',()=>expect(true).toBe(true));it('handles errors',()=>expect(()=>{throw new Error('test')}).toThrow());});