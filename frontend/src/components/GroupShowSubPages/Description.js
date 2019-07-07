import React from 'react'

const Description = props => {
    return(
        <div>
            <h2>Description</h2>
            <p>
                { props.description }
            </p>
        </div>
    )
}

export default Description