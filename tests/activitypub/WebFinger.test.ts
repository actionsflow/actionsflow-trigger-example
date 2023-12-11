import { describe, expect, test } from '@jest/globals';
import { WebFinger } from '../../src/activitypub';

describe('WebFinger', () => {
  test('discover user', async () => {
    const account = await WebFinger.discover("toot.io", "grislyeye");
    expect(account.links.length).toBe(4);
  });
});
