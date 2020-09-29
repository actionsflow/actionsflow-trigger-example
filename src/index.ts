import {
  ITriggerClassType,
  ITriggerContructorParams,
  IHelpers,
  AnyObject,
  ITriggerOptions,
} from "actionsflow-core";

export default class Example implements ITriggerClassType {
  constructor({ helpers, options }: ITriggerContructorParams) {
    this.options = options;
    this.helpers = helpers;
  }
  options: ITriggerOptions = {};
  helpers: IHelpers;
  async run(): Promise<AnyObject[]> {
    const items: AnyObject[] = [
      {
        id: "uniqueId",
        title: "hello world title",
      },
      {
        id: "uniqueId2",
        title: "hello world title2",
      },
    ];
    return items;
  }
  getItemKey(item: AnyObject): string {
    if (item.id) return item.id as string;
    return this.helpers.createContentDigest(item);
  }
}
