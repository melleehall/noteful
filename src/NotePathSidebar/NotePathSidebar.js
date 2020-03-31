import React from 'react'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import './NotePathSidebar.css'


export default function RenderNotePathSidebar(props) {

    return (
        <section>
            <CircleButton 
                title = '< Back'
            />
            <h3 className='folder_name'>
                {props.folder.name}
            </h3>
        </section>
    )
}