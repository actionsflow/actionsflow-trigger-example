import { Account } from "./Account";
import { HttpClient } from "typed-rest-client/HttpClient";

export class WebFinger {
  private static http = new HttpClient("@actionsflow/trigger-activitypub");

  static async discover(host: string, user: string): Promise<Account> {
    const uri = `https://${host}/.well-known/webfinger?resource=acct:${user}@${host}`;
    const response = await WebFinger.http.get(uri);
    const body = await response.readBody();
    const actor: Account = JSON.parse(body);
    return actor;
  }
}
