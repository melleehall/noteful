import React from 'react'
import { withRouter } from 'react-router-dom'
import Note from '../Note/Note'
import CircleButton from '../Buttons/CircleButton/CircleButton'

function RenderHomePathMain(props) {
    const notes = props.notes.map(note => 
        <Note
            id={note.id}
            key={note.id}
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
                <CircleButton 
                    title = {"+ Note"}
                />
            </div>
        </section>
    )

}

export default withRouter(RenderHomePathMain)