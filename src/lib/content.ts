import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export type ContentMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  image?: string;
  tags?: string[];
};

export type ContentItem = ContentMeta & {
  content: string;
};

export function getContentBySlug(
  type: 'blog' | 'actions',
  locale: string,
  slug: string
): ContentItem | null {
  const filePath = path.join(contentDirectory, type, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author,
    category: data.category,
    image: data.image,
    tags: data.tags,
    content,
  };
}

export function getAllContent(
  type: 'blog' | 'actions',
  locale: string
): ContentMeta[] {
  const dir = path.join(contentDirectory, type, locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  const items = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author,
      category: data.category,
      image: data.image,
      tags: data.tags,
    };
  });

  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs(type: 'blog' | 'actions', locale: string): string[] {
  const dir = path.join(contentDirectory, type, locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}
