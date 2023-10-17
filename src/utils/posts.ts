import { Post } from "../models/post";

export function sortByDate(posts: Post[]) {
  return posts.sort(
    (a, b) =>
      b.publishedAt.valueOf() - a.publishedAt.valueOf()
  );
}
