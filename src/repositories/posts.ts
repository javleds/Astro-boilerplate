import { getCollection } from 'astro:content';
import { availableCollections } from '@/content/config';

export async function all(): Promise<Post[]> {

  const blobPosts = await getCollection(availableCollections.blog);

  return sortByDate(blobPosts.data);
}

export async function take(count: number): Promise<Post[]> {
  return (await all()).slice(0, count);
}

function sortByDate(posts: Post[]): Post[] {
  return posts.sort(
    (a, b) => b.publishedAt.valueOf() - a.publishedAt.valueOf()
  );
}