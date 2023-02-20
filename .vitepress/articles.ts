import { readdirSync } from 'fs'
import { resolve, basename } from 'path'
import startCase from 'lodash/startCase'

function parseArticleFilename(filename: string) {
  const name = basename(filename, '.md')

  return {
    text: startCase(name),
    link: `/articles/${name}`,
  }
}

const articleRoot = resolve(__dirname, '../articles')
const articleFilenames = readdirSync(articleRoot)

export const articles = articleFilenames.map(parseArticleFilename)
