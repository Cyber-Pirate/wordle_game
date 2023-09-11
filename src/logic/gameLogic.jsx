import axios from "axios"

var RandomWord

async function getWord(len) {
  var res = await axios.get(`https://random-word-api.herokuapp.com/word?length=${len}`)
  RandomWord = res.data[0]
}

const gameLogic = {
    word: '',
    guesses: [],
    currentGuess: 0,

    get won(){
        return this.guesses[this.currentGuess - 1] = this.word
    },

    get lost(){
        return this.currentGuess = this.word.length
    },

    async init(no){
        await getWord(no)
        this.word = RandomWord
        this.guesses = new Array(6).fill('');
        this.currentGuess = 0
    },

    submitGuess() {
      if (words.includes(this.guesses[this.currentGuess])) {
        this.currentGuess += 1
      }
    },
    handleKeyup(e) {
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
      if (this.guesses[this.currentGuess].length < 5 && e.key.match(/^[A-z]$/)) {
        this.guesses[this.currentGuess] =
          this.guesses[this.currentGuess] + e.key.toLowerCase()
      }
    },
}

export default gameLogic;