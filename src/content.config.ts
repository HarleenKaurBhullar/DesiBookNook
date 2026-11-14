import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One JSON file per book in src/content/books.
// The file name (without .json) becomes the book's id, e.g. "atomic-habits".
const books = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.string(), // path inside /public, e.g. "/covers/atomic-habits.jpg"
    blurb: z.string(),
    rating: z.number().int().min(1).max(5).optional(),
    tags: z.array(z.string()).default([]), // use hyphens, not spaces: "non-fiction"
  }),
});

// One Markdown file per list in src/content/posts.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    ranked: z.boolean().default(false), // true shows 1, 2, 3... beside each book
    draft: z.boolean().default(false), // true hides the post from the site
    books: z.array(reference('books')).default([]), // list of book ids, in order
  }),
});

export const collections = { books, posts };
