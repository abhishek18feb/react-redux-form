import React, { useState } from 'react';

const PasswordField = props => {
    const [password, setPassword] = useState("")
    const [disp, setDisp] = useState("none")
    const setPasswordValue = event => {
        console.log(event)
        setPassword(event.target.value);
        setDisp('block')
    }
    const hideTooltip = event => {
        setDisp("none")
    }
    return (
        <React.Fragment>
            <input type="text"
                name={props.name}
                value={password}
                onChange={event => setPasswordValue(event)}
                onBlur={event => hideTooltip(event)}
            />
            <div className="tooltip" style={{ display: disp }}>
                {password}
            </div>
        </React.Fragment>
    )
}

export default PasswordField;

