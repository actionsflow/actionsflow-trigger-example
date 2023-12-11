import { Trigger } from "./sanity";
import { Post } from "./Post";
import { ActivityPub, WebFinger } from "./activitypub";

export default class ActivityPubTrigger extends Trigger<Post> {
  async trigger(): Promise<Post[]> {
    const { host, user } = this.options as {
      host: string;
      user: string;
    };

    const account = await WebFinger.discover(host, user);
    const actor = await ActivityPub.forAccount(account);

    if (actor) {
      const activities = await ActivityPub.activitiesFor(actor);

      const notes = activities!
        .filter((activity) => activity.type == "Create")
        .filter((activity) => activity.object.type == "Note");

      const posts = notes!.map(
        (activity) => new Post(activity.id, activity.object.contentMap.en)
      );

      return posts;
    }

    return [];
  }
}
