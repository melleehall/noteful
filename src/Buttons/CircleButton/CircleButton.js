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
    path: (props, propName, componentName) => {
        const prop = props[propName];

        if(!prop) {
            return new Error(`${propName} is required in ${componentName}.`);
        }

        if (typeof prop != 'string') {
            return new Error(`Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`);
        }

        const validPaths = ['/', '/add-folder', '/add-note']

        if (validPaths.includes(prop) === false) {
            return new Error(`Invalid path, ${prop} is expected to correlate with an existing path.`)
        }
    }
}
