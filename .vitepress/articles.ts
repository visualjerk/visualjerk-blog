import { readdirSync } from 'fs'
import { resolve, basename } from 'path'
import startCase from 'lodash/startCase'

const IGNORED_PATHS = ['assets']

function parseArticleFilename(filename: string) {
  const name = basename(filename, '.md')

  return {
    text: startCase(name),
    link: `/articles/${name}`,
  }
}

const articleRoot = resolve(__dirname, '../articles')
const articleFilenames = readdirSync(articleRoot)

export const articles = articleFilenames
  .filter((name) => !IGNORED_PATHS.includes(name))
  .map(parseArticleFilename)
