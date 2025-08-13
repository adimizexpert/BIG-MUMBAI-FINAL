#!/bin/bash

# Blog Creation Script for Big Mumbai Game
# Usage: ./create-blog.sh "Blog Title" "author-name" "category"

if [ $# -ne 3 ]; then
    echo "Usage: $0 \"Blog Title\" \"author-name\" \"category\""
    echo "Example: $0 \"Gaming Tips for Beginners\" \"Big Mumbai Team\" \"Gaming Tips\""
    exit 1
fi

BLOG_TITLE="$1"
AUTHOR="$2"
CATEGORY="$3"

# Convert title to URL-friendly format
BLOG_SLUG=$(echo "$BLOG_TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-\|-$//g')

echo "🎮 Creating new blog: $BLOG_TITLE"
echo "📝 Slug: $BLOG_SLUG"
echo "✍️ Author: $AUTHOR"
echo "🏷️ Category: $CATEGORY"

# Create blog directory
mkdir -p "app/$BLOG_SLUG"
mkdir -p "public/images/blogs"

# Copy template
cp BLOG-TEMPLATE.tsx "app/$BLOG_SLUG/page.tsx"

# Create content.txt file
cat > "blog-content/$BLOG_SLUG/content.txt" << EOF
TITLE: $BLOG_TITLE
DATE: $(date +%Y-%m-%d)
AUTHOR: $AUTHOR
READ_TIME: 5 min read
CATEGORY: $CATEGORY
FEATURED: false

CONTENT:
Your blog content goes here. Replace this with your actual blog content.

You can write multiple paragraphs and include:
- Bullet points
- Numbered lists
- Bold text (use **text** for emphasis)
- Links (use [text](url) format)

END_CONTENT

META_DESCRIPTION: A brief description of your blog post for SEO purposes
KEYWORDS: big mumbai game, gaming tips, online gaming, strategy
EOF

# Create images directory
mkdir -p "blog-content/$BLOG_SLUG/images"

echo ""
echo "✅ Blog structure created successfully!"
echo ""
echo "📁 Files created:"
echo "  - app/$BLOG_SLUG/page.tsx"
echo "  - blog-content/$BLOG_SLUG/content.txt"
echo "  - blog-content/$BLOG_SLUG/images/"
echo "  - public/images/blogs/"
echo ""
echo "🚀 Next steps:"
echo "1. Add your header image to: public/images/blogs/$BLOG_SLUG-header.jpg"
echo "2. Edit: app/$BLOG_SLUG/page.tsx (update blogData object)"
echo "3. Edit: blog-content/$BLOG_SLUG/content.txt (add your content)"
echo "4. Test locally: npm run dev"
echo "5. Commit and push: git add . && git commit -m \"Add new blog: $BLOG_TITLE\" && git push origin main"
echo ""
echo "🎯 Happy blogging!"
