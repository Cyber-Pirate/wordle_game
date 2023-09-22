import CreateBoard from './board'
import Keyboard from './keyboard'

export default function Game({ word, guesses, currentGuess }){    
    return(
        <div className='game-cont flex-col'>
          <div className='game-baord flex-col'>
            {guesses.map((_, i) => (              
            <CreateBoard
                key={i}
                word={word}
                guess={guesses[i]}
                isGuessed={i < currentGuess}
              />
            ))}
          </div>
          <Keyboard />
          <div>
            Word: {word} <br/>
            Word Length: {word.length} <br/>
            Guesses: {JSON.stringify(guesses)} <br/>
            CurrentGuess: {currentGuess}
          </div>
      </div>
    )
}