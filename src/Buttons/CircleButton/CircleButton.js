import React from 'react'
import { Link } from 'react-router-dom'
import './CircleButton.css'

export default function RenderCircleButton(props) {
    const path = props.path

    return (
        <Link to={path} className='circle_button'>
            {props.title}
        </Link>
    )
}
