import { describe, expect, test } from '@jest/globals';
import { ActivityPub, WebFinger } from '../../src/ActivityPub';

describe('ActivityPub', () => {
  test('discover user', async () => {
    const account = await WebFinger.discover("toot.io", "grislyeye");
    const actor = await ActivityPub.forAccount(account);
    expect(actor!.outbox).toBe("https://toot.io/users/grislyeye/outbox");
    if (actor) {
      const activities = await ActivityPub.activitiesFor(actor);
      expect(activities!.length).toBe(20);
    }
  });
});
