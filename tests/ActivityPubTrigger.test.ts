import { describe, expect, test } from '@jest/globals';
import ActivityPubTrigger from '../src/ActivityPubTrigger';
import { getTriggerConstructorParams } from "actionsflow-core";
import { resolve } from "path";

describe('ActivityPubTrigger', () => {
  test("test trigger run", async () => {
    const parameters = await getTriggerConstructorParams({
      name: "activitypub",
      workflowPath: resolve(__dirname, "fixtures/workflows/workflow.yml"),
    });

    const trigger = new ActivityPubTrigger(parameters);
    const result = await trigger.run();

    expect(result.length).toBe(16);
  });
});
