import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageBox = props => 
    <div className='img-box' style={{width: '40%'}}>
        <Image src={props.img} fluid />
    </div>

export default ImageBox