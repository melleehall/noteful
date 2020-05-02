import React from 'react'
import { withRouter } from 'react-router-dom'
import Note from '../Note/Note'
import NotesContext from '../NotesContext'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import NotefulError from '../NotefulError'

function RenderHomePathMain(props) {
    function generateNoteInstances (notes) {
        const noteInstances = notes.map(note =>
            <NotefulError key={note.id}>
            <Note
                id={note.id.toString()}
                key={note.id}
                note_name={note.note_name}
                modified_date={note.modified_date}
                folder_id={note.folder_id}
                content={note.content}
            />  
            </NotefulError>
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
                    path={'/add-note'}
                    title = {"+ Note"}
                />
            </div>
        </section>
    )

}

export default withRouter(RenderHomePathMain)