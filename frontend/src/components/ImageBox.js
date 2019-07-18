import React from 'react'

const ImageBox = props => 
    <div className='img-box' style={{width: '40%'}}>
        <img src={props.img} alt=''/>
    </div>

export default ImageBox