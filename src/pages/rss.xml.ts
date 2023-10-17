import rss from '@astrojs/rss';

import { config } from '../utils/config';

export const get = () =>
  rss({
    title: config.title,
    description: config.description,
    site: config.siteName,
    items: import.meta.glob('./**/*.md'),
    customData: `<language>es-mx</language>`,
  });
