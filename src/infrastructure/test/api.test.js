/* eslint-disable no-undef */
import { getTest } from '../api';

describe('Api', () => {
  it('return some response', async () => {
    return getTest().then((res) => {
      expect(typeof res).toBe('object');
      expect(res.status).toBeGreaterThanOrEqual(1);
      expect(res.status).toBeLessThanOrEqual(399);
    });
  });
});
