import { Activity } from "./Activity";

export interface Outbox {
  orderedItems: Activity[];
}
