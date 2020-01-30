import React from 'react';

const PasswordField = props => {

    return (
        <React.Fragment>
            <input type="text" 
                name={props.name}
            />
        </React.Fragment>
    )
}

export default PasswordField;

