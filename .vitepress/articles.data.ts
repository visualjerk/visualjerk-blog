import { articles } from './articles'

export interface Article {
  text: string
  link: string
}

// declare resolved data type
export declare const data: Article[]

export default {
  // declare files that should trigger HMR
  watch: './*.md',
  // read from fs and generate the data
  load() {
    return articles
  },
}
