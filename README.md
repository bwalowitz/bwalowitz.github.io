# Brandon Walowitz Personal Site

This repository contains the source for my static portfolio site. The site is deployed to GitHub Pages using the workflow defined in `.github/workflows/static.yml`.

## Blog

A simple blog section is available under `blog/`. Each post is an HTML file inside `blog/posts/`. The blog index page lists all posts.

### Creating a Post

Run the helper script to generate a new post file and automatically update the index:

```bash
python3 scripts/create_post.py "My Post Title"
```

This creates `blog/posts/YYYY-MM-DD-my-post-title.html` with a basic template and rebuilds `blog/index.html`.

After editing the generated file with your content, commit both the post and the updated index page.

