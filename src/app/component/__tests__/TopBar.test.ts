import { formatPath } from '../TopBar';

describe('formatPath', () => {
  it("returns '/Portfolio/Home' for root", () => {
    expect(formatPath('/')).toBe('/Portfolio/Home');
  });

  it("capitalizes segments", () => {
    expect(formatPath('/about')).toBe('/Portfolio/About');
  });
});
