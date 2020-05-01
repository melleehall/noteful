import React from 'react'
import Note from '../Note/Note'
import NotesContext from '../NotesContext'

export default class RenderNotePathMain extends React.Component {
    render() {
        // get noteId from url path
        const noteId = this.props.match.params.noteID

        function generateNoteforNotePath (notes) {

            const selectedNote = notes.filter(note => 
                note.id.toString() === noteId.toString()
            )

            const noteInstance = selectedNote.map(note => 
                <div>
                    <Note
                        id={note.id}
                        key={note.id}
                        note_name={note.note_name}
                        modified_date={note.modified_date}
                    /> 
                    <p>{note.content}</p>
                </div>
            )
            
            return noteInstance
        }

        return (
            <section>
                <NotesContext.Consumer>
                    {(context) => {
                        return generateNoteforNotePath(context.notes)
                    }}
                </NotesContext.Consumer>
            </section>
        )
    }
}