export interface Activity {
  id: string;
  type: string;
  object: {
    type: String;
    contentMap: Record<string, string>;
  };
}
