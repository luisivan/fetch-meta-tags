import { parse } from 'node-html-parser'

import metadataRuleSets from './rulesets.js'

const fetchHead = async (url) => {
  const read = async (body) =>
    new Promise(async (resolve) => {
      let head = ''
      for await (const chunk of body) {
        head += chunk.toString()

        if (head.toString().split('</head>')[1] !== undefined) {
          head += `${head.toString().split('</head>')[0]}</head></html>`
          resolve(head)
        }
      }

      resolve(head)
    })

  /*if (!global.fetch) {
    global.fetch = await import('node-fetch')
  }*/
  const res = await fetch(url)
  return read(res.body)
}

const makeUrlAbsolute = (url, path) =>
  new URL(path, new URL(url).origin).toString()

export default async function fetchMeta(url) {
  const head = await fetchHead(url)
  const dom = parse(head)
  const metadata = {
    url,
  }
  for (const prop in metadataRuleSets) {
    for (const rule of metadataRuleSets[prop].rules) {
      const el = dom.querySelector(rule[0])
      if (el) {
        let data = rule[1](el)
        metadata[prop] = metadataRuleSets[prop].absolute
          ? makeUrlAbsolute(url, data)
          : data
        break
      }
    }
    if (!metadata[prop] && metadataRuleSets[prop].defaultValue) {
      metadata[prop] = makeUrlAbsolute(url, metadataRuleSets[prop].defaultValue)
    }
  }
  return metadata
}
