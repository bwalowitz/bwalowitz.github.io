#!/usr/bin/env python3
"""Utility to create a new blog post file."""

import re
import sys
from datetime import date
from pathlib import Path

BLOG_DIR = Path(__file__).resolve().parents[1] / "blog"
POSTS_DIR = BLOG_DIR / "posts"

POST_TEMPLATE = """<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"../../style.css\">
    <title>{title}</title>
</head>
<body>
<header>
    <nav>
        <ul>
            <li><a href=\"../../index.html\">Work</a></li>
            <li><a href=\"../../about.html\">About</a></li>
            <li><a href=\"../../contact.html\">Contact</a></li>
            <li><a class=\"active-link\" href=\"../index.html\">Blog</a></li>
        </ul>
    </nav>
</header>
<main>
<h1>{title}</h1>
<p class=\"main-paragraph\">Write your content here.</p>
</main>
<footer>
    <p>COPYRIGHT ©2025 Brandon Walowitz</p>
    <p>All Rights Reserved</p>
</footer>
</body>
</html>
"""

INDEX_TEMPLATE = """<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"../style.css\">
    <title>Brandon Walowitz | Blog</title>
</head>
<body>
<header>
    <nav>
        <ul>
            <li><a href=\"../index.html\">Work</a></li>
            <li><a href=\"../about.html\">About</a></li>
            <li><a href=\"../contact.html\">Contact</a></li>
            <li><a class=\"active-link\" href=\"index.html\">Blog</a></li>
        </ul>
    </nav>
</header>
<main>
<h1><a class=\"heading-link\" href=\"index.html\">Blog</a></h1>
<ul>
{posts}
</ul>
</main>
<footer>
    <p>Copyright ©2025 Brandon Walowitz</p>
    <p>All Rights Reserved</p>
</footer>
</body>
</html>
"""


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def update_index():
    items = []
    for path in sorted(POSTS_DIR.glob("*.html")):
        name = path.stem
        parts = name.split("-")
        if len(parts) < 4:
            # Expect format YYYY-MM-DD-title
            continue
        date_str = "-".join(parts[:3])
        title = " ".join(parts[3:]).replace("-", " ").title()
        items.append(f"    <li><a href=\"posts/{path.name}\">{title}</a> - {date_str}</li>")
    posts_html = "\n".join(items)
    BLOG_DIR.joinpath("index.html").write_text(INDEX_TEMPLATE.format(posts=posts_html))


def create_post(title: str):
    slug = slugify(title)
    today = date.today().isoformat()
    filename = f"{today}-{slug}.html"
    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    path = POSTS_DIR / filename
    if path.exists():
        print(f"Post {filename} already exists")
        return
    path.write_text(POST_TEMPLATE.format(title=title))
    update_index()
    print(f"Created {path}")


def main(argv=None):
    argv = argv or sys.argv[1:]
    if not argv:
        print("Usage: create_post.py 'Post Title'")
        return
    title = " ".join(argv)
    create_post(title)


if __name__ == "__main__":
    main()
