import { Account } from "./Account";
import { Actor } from "./Actor";
import { Activity } from "./Activity";
import * as Outbox from "./Outbox";
import { HttpClient } from "typed-rest-client/HttpClient";

export class ActivityPub {
  private static http = new HttpClient("@actionsflow/trigger-activitypub");
  private static mediaType = "application/activity+json";
  private static accept = { Accept: ActivityPub.mediaType };

  static async forAccount(account: Account): Promise<Actor | undefined> {
    const self = account.links.filter((link) => link.rel == "self")[0];
    const uri = self!.href;

    if (uri) {
      const response = await ActivityPub.http.get(uri, ActivityPub.accept);
      const body = await response.readBody();
      const user: Actor = JSON.parse(body);
      return user;
    }

    return undefined;
  }

  static async activitiesFor(actor: Actor): Promise<Activity[] | undefined> {
    const uri = `${actor.outbox}?page=true`;
    const response = await ActivityPub.http.get(uri, ActivityPub.accept);
    const body = await response.readBody();
    return Outbox.fromJson(body);
  }
}
