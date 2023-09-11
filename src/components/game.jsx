import CreateBoard from './board'
import Keyboard from './keyboard'
import gameLogic from '../logic/gameLogic' 
import { useEffect, useState } from 'react'

export default function Game({ no, gl, word, guesses, currentGuess }){    
  useEffect(() => {
    gl.init(no)
  }, [])

    return(
        <div className='game-cont flex-col'>
          <div className='game-baord flex-col'>
            {guesses.map((_, i) => (              
            <CreateBoard
                key={i}
                isGuessed={i < currentGuess} 
                guess={guesses[i]}
                word={word}
                // isGuessed={true}
                // guess={"     "}
                // word={"hellpjkhkj"}
              />
            ))}
          </div>
          <Keyboard />
          <div>
            Word: {word} <br/>
            Word Length: {word.length}
          </div>
      </div>
    )
}