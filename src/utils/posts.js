import { formatRelative } from 'date-fns';
import { es } from 'date-fns/locale';

export function sortByDate(posts) {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
}

export function beautifulDate (date) {
  return formatRelative(new Date(date), new Date(), { locale: es });
}

export function getUrl(url) {
  return '/posts' + url;
}
