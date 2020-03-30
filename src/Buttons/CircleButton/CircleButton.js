import React from 'react'
import { Link } from 'react-router-dom'
import './CircleButton.css'

export default function RenderCircleButton(props) {
    return (
        <Link to={'/'} className='circle_button'>
            Home
        </Link>
    )
}
