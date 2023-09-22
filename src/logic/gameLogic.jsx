import axios from "axios"
import words from './words.json'

var RandomWord

async function getWord(len) {
var res = await axios.get(`https://random-word-api.herokuapp.com/word?length=${len}`)
RandomWord = res.data[0]
}

await getWord(4);
console.log('1st: ', RandomWord)

const gameLogic = {
  word: RandomWord,
  guesses: new Array(6).fill(''),
  currentGuess: 0,
  wordLen: 4,

get won(){
    return this.guesses[this.currentGuess - 1] = this.word
},

get lost(){
    return this.currentGuess === 6
},

async init(no){
    await getWord(no)
    this.wordLen = no
    this.word = RandomWord
    this.guesses = new Array(6).fill('')
    this.currentGuess = 0
    console.log('lol: ', this.guesses[this.currentGuess].length)
    console.log('2st: ',RandomWord)
},

submitGuess() {
  if (words.includes(this.guesses[this.currentGuess])) this.currentGuess += 1
},

handleKeydown(e) {
  if (this.won || this.lost) {
    return
  }

  if (e.key === 'Enter') {
    return this.submitGuess()
  }
  if (e.key === 'Backspace') {
    this.guesses[this.currentGuess] = this.guesses[this.currentGuess].slice(
      0,
      this.guesses[this.currentGuess].length - 1
    )
    return
  }
  if (this.guesses[this.currentGuess].length < this.wordLen && e.key.match(/^[A-z]$/)) {
    this.guesses[this.currentGuess] = this.guesses[this.currentGuess] + e.key.toUpperCase()
  }
},
}

export default gameLogic;