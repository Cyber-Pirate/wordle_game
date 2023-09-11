import './App.css'
import Navbar from './components/navbar'
import Settings from './components/settings'
import { useState, useEffect } from 'react'
import Game from './components/game'
import gameLogic from './logic/gameLogic'

export default function App() {
  const [no, setNo] = useState(4)
  const setNumber = (e) => setNo(e)
  const [visible, setVisibility] = useState(false)
  const showSettings = () => visible ? setVisibility(false) : setVisibility(true)
  const gl = gameLogic
    useEffect(() => {
      gl.init(no)
      document.getElementById(`li_${no}`).classList.add('btn-no_active');
      window.addEventListener('keyup', gl.handleKeyup)
    return () => {
      window.removeEventListener('keyup', gl.handleKeyup)
    }
    }, [no])
    
  return (
    <main className='main noselect'>
      <Navbar showSettings={showSettings}  />
      <Game no={no} gl={gl} word={gl.word} isGuessed={gl.isGuessed} guesses={gl.guesses} />
      <Settings isVisible={visible} showSettings={showSettings} no={no} setNumber={setNumber}/>
    </main>
  );
}