import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { site } from '../data/site';
export const GET: APIRoute = async (context) => {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  return rss({ title: `${site.shortName}: публикации`, description: 'Новости, истории и материалы семейного производства.', site: context.site!, items: articles.map((item) => ({ title: item.data.title, description: item.data.description, pubDate: item.data.publishDate, link: `/articles/${item.id}/` })) });
};
