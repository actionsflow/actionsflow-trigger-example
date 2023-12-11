export interface Activity {
  readonly id: string;
  readonly type: string;
  readonly published: Date;
  readonly object: {
    readonly type: String;
    readonly contentMap: Record<string, string>;
  };
}
