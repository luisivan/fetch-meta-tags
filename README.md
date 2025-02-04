[![npm version](https://badge.fury.io/js/fetch-meta-tags.svg)](https://badge.fury.io/js/fetch-meta-tags)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# fetch-meta-tags

> Fetch and parse OG tags and metadata from any URL, the fast way

## Why

I wanted a way to quickly fetch OG tags from websites and get their title, description, icon and OG image. I found all existing solutions to not be ideal because:

- They had unnecessary dependencies, increasing bundle size
- They fetch the whole body of the website, increasing load time

`fetch-meta-tags` solves those problems by:

- Having just one dependency: `node-html-parser`. Very lightweight library and also very fast
- Streaming websites and stopping the HTTP request once `</head>` is received. No need to fetch the whole HTML of the website

## Installation

```sh
$ yarn add fetch-meta-tags
```

```sh
$ npm install --save fetch-meta-tags
```

For Typescript project you can also use the types package:

```sh
$ yarn add fetch-meta-tags @types/fetch-meta-tags
```

```sh
$ npm install --save fetch-meta-tags @types/fetch-meta-tags
```

## Usage

```js
import fetchMeta from 'fetch-meta-tags'

await fetchMeta('https://luisc.xyz')

await fetchMeta('https://luisc.xyz', { method: 'GET', cache: 'no-cache' })
```

Outputs:

```js
{
  url: 'https://luisc.xyz',
  title: 'Luis Cuende',
  description: 'Musings about modern philosophy, productivity and unbundling the nation state with crypto/Web3.',
  icon: 'https://luisc.xyz/favicon.ico',
  image: 'https://luisc.xyz/logo.jpg'
}
```

## Credits

https://github.com/mozilla/page-metadata-parser for the meta tag rulesets.

## License

MIT License
