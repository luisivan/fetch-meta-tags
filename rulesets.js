const attr = (element, attribute) => element.getAttribute(attribute)

export default {
  title: {
    rules: [
      ['meta[property="og:title"]', (e) => attr(e, 'content')],
      ['meta[name="twitter:title"]', (e) => attr(e, 'content')],
      ['meta[property="twitter:title"]', (e) => attr(e, 'content')],
      ['title', (e) => e.text],
    ],
  },

  description: {
    rules: [
      ['meta[property="og:description"]', (e) => attr(e, 'content')],
      ['meta[name="description" i]', (e) => attr(e, 'content')],
    ],
  },

  icon: {
    rules: [
      ['link[rel="apple-touch-icon"]', (e) => attr(e, 'href')],
      ['link[rel="apple-touch-icon-precomposed"]', (e) => attr(e, 'href')],
      ['link[rel="icon" i]', (e) => attr(e, 'href')],
    ],
    defaultValue: 'favicon.ico',
    absolute: true,
  },

  image: {
    rules: [
      ['meta[property="og:image:secure_url"]', (e) => attr(e, 'content')],
      ['meta[property="og:image:url"]', (e) => attr(e, 'content')],
      ['meta[property="og:image"]', (e) => attr(e, 'content')],
      ['meta[name="twitter:image"]', (e) => attr(e, 'content')],
      ['meta[property="twitter:image"]', (e) => attr(e, 'content')],
      ['meta[name="thumbnail"]', (e) => attr(e, 'content')],
    ],
    absolute: true,
  },
}
