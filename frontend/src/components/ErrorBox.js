import React from 'react'

const ErrorBox = props => {
    return(
        <div className='error-box'>
            <p>{props.message}</p>
        </div>
    )
}

export default ErrorBox