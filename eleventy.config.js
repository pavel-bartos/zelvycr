import {
  datumCZ,
  jinePolozky,
  kc,
  podleSlugu,
  prevNextClanek,
  rozpetiKc,
  telHref,
} from './lib/filtry.js';

/**
 * Eleventy konfigurace — statický prototyp webu Želvy ČR.
 *
 * pathPrefix: na GitHub Pages web běží v podadresáři (/<repo>/), lokálně v kořeni.
 * Workflow .github/workflows/deploy.yml nastavuje PATH_PREFIX; lokálně zůstává "/".
 * V šablonách proto VŽDY používej filtr `url` na interní odkazy: {{ "/o-nas/" | url }}
 */
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/static': '.' });
  eleventyConfig.addWatchTarget('src/assets/css/');

  eleventyConfig.addFilter('datumCZ', datumCZ);
  eleventyConfig.addFilter('telHref', telHref);
  eleventyConfig.addFilter('kc', kc);
  eleventyConfig.addFilter('rozpetiKc', rozpetiKc);
  eleventyConfig.addFilter('podleSlugu', podleSlugu);
  eleventyConfig.addFilter('jinePolozky', jinePolozky);
  eleventyConfig.addFilter('prevNextClanek', prevNextClanek);

  return {
    pathPrefix: process.env.PATH_PREFIX || '/',
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      data: '_data',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['njk', 'md', 'html'],
  };
}
