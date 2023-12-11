import { Activity } from "./Activity";

interface Outbox {
  readonly orderedItems: {
    readonly id: string;
    readonly type: string;
    readonly published: string;
    readonly object: {
      readonly type: String;
      readonly contentMap: Record<string, string>;
    };
  }[];
}

export function fromJson(json: string): Activity[] {
  const outbox: Outbox = JSON.parse(json);
  console.log;
  return outbox.orderedItems.map((item) => {
    return {
      id: item.id,
      type: item.type,
      published: new Date(Date.parse(item.published)),
      object: item.object,
    };
  });
}
