import fetch from 'node-fetch'
import pako from 'pako'
import * as path from 'path'

const snakeToCamel = (value: string): string =>
  value
    .replace('.icc', 'Deflated')
    .replace(/([-_][a-z])/gi, (match: string) =>
      match
        .toUpperCase()
        .replace('-', '')
        .replace('_', '')
    )

const response = await fetch('https://api.github.com/repos/saucecontrol/Compact-ICC-Profiles/git/trees/master?recursive=1')
const files = await response.json() as { tree: [{ path: string }] }

const code = await Promise.all(
  files.tree
    .map((file) => file.path)
    .filter((file) => file.endsWith('.icc'))
    .map(async (file) => {
      const url = 'https://github.com/saucecontrol/Compact-ICC-Profiles/raw/master/' + file

      const response = await fetch(url)
      const data = await response.arrayBuffer()
      const deflated = pako.deflate(data)
      return `export const ICCProfile${snakeToCamel(path.basename(file))}: string = '${Buffer.from(deflated).toString('base64')}'`
    }))

console.log('/**')
console.log(' * ICC profiles © Clinton Ingram, source see https://github.com/saucecontrol/Compact-ICC-Profiles')
console.log(' * License CC0-1.0, see https://github.com/saucecontrol/Compact-ICC-Profiles/blob/master/license')
console.log(' *')
console.log(' * Generated with update-icc-profiles.ts script')
console.log(' * Note: profiles are deflated')
console.log(' */')
console.log(code.sort().join('\n'))
