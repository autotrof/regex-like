
import regex_like from './index.js'

const the_paragraph = "Budi is going to the school"
let regex = regex_like('Budi go school')

if (regex.test(the_paragraph)) {
  console.log("keyword found")
}