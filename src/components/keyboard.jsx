import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Keyboard(){
    return(
        <div className="keyboard flex-col">
            <div className="keys-row">
                <div className="key-btn letter">Q</div>
                <div className="key-btn letter">W</div>
                <div className="key-btn letter">E</div>
                <div className="key-btn letter">R</div>
                <div className="key-btn letter">T</div>
                <div className="key-btn letter">Y</div>
                <div className="key-btn letter">U</div>
                <div className="key-btn letter">I</div>
                <div className="key-btn letter">O</div>
                <div className="key-btn letter">P</div>
            </div>
            <div className="keys-row">
                <div className="key-btn letter">A</div>
                <div className="key-btn letter">S</div>
                <div className="key-btn letter">D</div>
                <div className="key-btn letter">F</div>
                <div className="key-btn letter">G</div>
                <div className="key-btn letter">H</div>
                <div className="key-btn letter">J</div>
                <div className="key-btn letter">K</div>
                <div className="key-btn letter">L</div>
            </div>
            <div className="keys-row">
                <div className="key-btn keys_wide bksp">
                    <FontAwesomeIcon className='key_bksp' icon={faDeleteLeft} />
                </div>
                <div className="key-btn letter">Z</div>
                <div className="key-btn letter">X</div>
                <div className="key-btn letter">C</div>
                <div className="key-btn letter">V</div>
                <div className="key-btn letter">B</div>
                <div className="key-btn letter">N</div>
                <div className="key-btn letter">M</div>
                <div className="key-btn keys_wide enter">Enter</div>
            </div>
        </div>
    )
}