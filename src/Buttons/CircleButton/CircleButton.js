import React from 'react'
import { Link } from 'react-router-dom'
import './CircleButton.css'
import PropTypes from 'prop-types'

export default function RenderCircleButton(props) {
    const path = props.path

    return (
        <Link to={path} className='circle_button'>
            {props.title}
        </Link>
    )
}

RenderCircleButton.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.oneOf(['/', '/add-folder', '/add-note'])
}
