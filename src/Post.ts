import { Item } from "./sanity";

export class Post implements Item {
  uri: string;
  message: string;

  constructor(uri: string, message: string) {
    this.uri = uri;
    this.message = message;
  }

  key() {
    return this.uri;
  }
}
