import React from 'react'
import { Image } from 'semantic-ui-react'

const Avatar = props => (
  <div>
    <Image src={props.imgURL} avatar />
    <span>{props.username}</span>
  </div>
)

export default Avatar