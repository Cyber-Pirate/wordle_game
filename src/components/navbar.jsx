import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faQuestion } from "@fortawesome/free-solid-svg-icons";


export default function Navbar({ showSettings }){
    return(
        <header className="header flex-row">
            <div className="logo">
                <h1>Wordle</h1>
            </div>
            <ul className="nav_items flex-row">
                <li className="nav_item" id="settings" onClick={showSettings}>
                    <FontAwesomeIcon className="nav_link_icon" icon={faGear} />
                </li>
                <li className="nav_item" id="how_to">
                        <FontAwesomeIcon className="nav_link_icon" icon={faQuestion} />
                </li>
            </ul>
        </header>
    )
}