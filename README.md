# Dog-Eared: a book blog built with Astro

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # creates the finished site in /dist
```

## How the site is organised

```
src/
  consts.ts              site name, tagline, nav links
  content.config.ts      the shape of a book and a post
  content/
    books/*.json         one file per book (file name = book id)
    posts/*.md           one file per list (file name = URL)
  lib/content.ts         helpers that load posts and books
  layouts/               BaseLayout (page shell), PostLayout (one list)
  components/            Header, Footer, PostCard, BookCard, BookSpines, CoverFan
  pages/                 index, blog/, books/, about, 404
  styles/global.css      colours, fonts and shared pieces
public/covers/           cover images
```

## Add a book

1. Put the cover in `public/covers/` (a 2:3 image, for example 600 x 900).
2. Create `src/content/books/my-book.json`:

```json
{
  "title": "My Book",
  "author": "Some Author",
  "cover": "/covers/my-book.jpg",
  "blurb": "One or two sentences on why it is worth reading.",
  "rating": 4,
  "tags": ["fantasy"]
}
```

## Add a list

Create `src/content/posts/my-list.md`. The books are the file names from `src/content/books`, without `.json`:

```md
---
title: "My List"
description: "One sentence shown on cards and in search results."
date: 2026-11-14
ranked: true      # shows 1, 2, 3 beside each book
draft: false      # true hides it from the site
books:
  - piranesi
  - atomic-habits
---

A short intro goes here, in normal Markdown.
```

It appears on the home page and at `/blog/my-list` automatically. A wrong book id stops the build and names the problem.

## Covers

The covers in `public/covers/` are placeholders drawn for this starter. Replace them with the real cover images and keep the same file names, or update the `cover` path in each book file.
