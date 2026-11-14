import { getCollection, getEntries, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Book = CollectionEntry<'books'>;

/** All published posts, newest first. Drafts are left out. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Published posts with their referenced books already resolved. */
export async function getPostsWithBooks(): Promise<{ post: Post; books: Book[] }[]> {
  const posts = await getPublishedPosts();
  return Promise.all(
    posts.map(async (post) => ({ post, books: await getEntries(post.data.books) })),
  );
}

/** Every book, best rated first, then A to Z. */
export async function getAllBooks(): Promise<Book[]> {
  const books = await getCollection('books');
  return books.sort(
    (a, b) =>
      (b.data.rating ?? 0) - (a.data.rating ?? 0) || a.data.title.localeCompare(b.data.title),
  );
}
