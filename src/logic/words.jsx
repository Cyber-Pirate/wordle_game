import axios from "axios"

var RandomWord

export default async function getWord(len) {
  var res = await axios.get(`https://random-word-api.herokuapp.com/word?length=${len}`)
  console.log(res.data)
  RandomWord = res.data
}

export { RandomWord };