import { resolve } from "path";
import Trigger from "../index";
import { getTriggerConstructorParams } from "actionsflow-core";

test("test trigger run", async () => {
  const triggerConstructorParams = await getTriggerConstructorParams({
    options: {
      param1: "value",
    },
    name: "example",
    cwd: resolve(__dirname, "fixtures"),
    workflowPath: resolve(__dirname, "fixtures/workflows/workflow.yml"),
  });
  const trigger = new Trigger(triggerConstructorParams);
  const result = await trigger.run();
  expect(result.length).toBe(2);
});
