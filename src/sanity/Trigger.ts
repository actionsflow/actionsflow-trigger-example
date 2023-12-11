import {
  ITriggerClassType,
  ITriggerContructorParams,
  ITriggerOptions,
  IHelpers,
  AnyObject,
} from "actionsflow-core";
import { Item } from "./Item";

export abstract class Trigger<I extends Item> implements ITriggerClassType {
  options: ITriggerOptions;
  helpers: IHelpers;

  constructor({ helpers, options }: ITriggerContructorParams) {
    this.options = options;
    this.helpers = helpers;
  }

  abstract trigger(): Promise<I[]>;

  run(): Promise<AnyObject[]> {
    return this.trigger().then((results) =>
      results.map((item) => item as AnyObject)
    );
  }

  getItemKey(object: AnyObject): string {
    const item = object as I;
    return item.key();
  }
}
