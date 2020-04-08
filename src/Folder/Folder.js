import React from 'react'
import { NavLink } from 'react-router-dom'
import './Folder.css'
import PropTypes from 'prop-types'

export default function RenderFolder(props) {

    return (
        <li key={props.id} >
            <NavLink to={`/folder/${props.id}`} className='folder'>
                {props.name}
            </NavLink>
        </li>
    )
}

RenderFolder.propTypes = {
    name: PropTypes.string.isRequired,
    id:  PropTypes.string.isRequired
}
