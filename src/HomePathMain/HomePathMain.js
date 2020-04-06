import React from 'react'
import { withRouter } from 'react-router-dom'
import Note from '../Note/Note'
import NotesContext from '../NotesContext'
import CircleButton from '../Buttons/CircleButton/CircleButton'

function RenderHomePathMain(props) {
    function generateNoteInstances (notes) {
        const noteInstances = notes.map(note =>
            <Note
                id={note.id}
                key={note.id}
                name={note.name}
                modified={note.modified}
                folderId={note.folderId}
                content={note.content}
            />     
        )
        return noteInstances
    }

    return (
        <section>
            <ul>
            <NotesContext.Consumer>
                {(context) => {
                    return generateNoteInstances(context.notes)
                }}
            </NotesContext.Consumer>
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