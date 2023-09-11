import ReactSwitch from "react-switch"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

export default function Settings({ isVisible, showSettings, no, setNumber }){
    const [check, setCheck] = useState(true)

    // useEffect(() => {
    //     // Set the initial background color for "4" as selected
        
    //   }, [no]);
    
    const handleNumberClick = (value) => {
        if(value === no){
            document.getElementById(`li_${value}`).classList.add('btn-no_active');
        }
        if (value !== no) {
          // Reset the background color for the previously selected number
          document.getElementById(`li_${no}`).classList.remove('btn-no_active')
        }
    
        // Update the selected number and its background color
        setNumber(value);
        document.getElementById(`li_${value}`).classList.add('btn-no_active');
      };

    const NoList = () => {
        const list =[]
        for(let i=4; i <= 11; i++){
            list.push(
                <li
                    key={i}
                    id={`li_${i}`}
                    className="btn-no"
                    onClick={() => handleNumberClick(i)}
                >
                {i}
                </li>

            )
        }
        return list
    }


    const settingsStyle = {
        top: isVisible ? '10%' : '-100%',
    }

    const darkThemeToggle = () => {
        
    }

    return(
        <div id="settings-cont" className="settings-cont flex-col" style={settingsStyle}>
            <div className="sett-header flex-row">
                <h3>Settings</h3>
                <FontAwesomeIcon icon={faX}  className="sett-close" onClick={showSettings}/>
            </div>
            <div className="no-of-letters flex-col">
                <h3>Number of Letters</h3>
                <ul className="select_no flex-row">
                    {NoList()}
                </ul>
            </div><hr />
            <div className="dm flex-row">
                <div className="dm_des flex-col">
                    <h3>Dark Mode</h3>
                    <p>Toggle light and dark mode.</p>
                </div>
                <ReactSwitch checked={check} onChange={() => {check == true ? setCheck(false) : setCheck(true)}} className="btn-toggle" />
            </div>
        </div>
    )
}