import React from 'react'
import { withRouter } from 'react-router-dom'
import Notes from '../Note/Note'
import CircleButton from '../Buttons/CircleButton/CircleButton'

function RenderHomePathMain(props) {
    const notes = props.notes.map(note => 
        <Notes
            id={note.id}
            name={note.name}
            modified={note.modified}
            folderId={note.folderId}
            content={note.content}
        /> 
    )

    return (
        <section>
            <ul>
               {notes}
            </ul>
            <div>
                <CircleButton />
            </div>
        </section>
    )

}

export default withRouter(RenderHomePathMain)