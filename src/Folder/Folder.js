import React from 'react'
import { NavLink } from 'react-router-dom'
import './Folder.css'

export default function RenderFolder(props) {
    return (
        <li key={props.id} className='folder'>
            <NavLink to='/folder/:folderID'>
                {props.name}
            </NavLink>
        </li>
    )
}