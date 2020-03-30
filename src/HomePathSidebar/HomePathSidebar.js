import React from 'react'
import Folder from '../Folder/Folder'
import CircleButton from '../Buttons/CircleButton/CircleButton'

export default function RenderHomePathSidebar(props) {
    return (
        <section>
            {/* <p>{props.currentNotes[0]}</p> */}
            <ul>
                <Folder />
            </ul>
            <div>
                <CircleButton />
            </div>
        </section>
    )
}