import React from 'react'
import Note from '../Note/Note'
import NotesContext from '../NotesContext'

export default class RenderNotePathMain extends React.Component {
    render() {
        // get noteId from url path
        const noteId = this.props.match.params.noteID
        console.log(noteId)

        // function findNote (notes) {
        //  
        //     const noteInstance = <Note 
        //         id={note.id}
        //         key={note.id}
        //         name={note.name}
        //         modified={note.modified}
        //         folderId={note.folderId}
        //         content={note.content}
        //     />
        //     return noteInstance
        // }

        function generateNoteforNotePath (notes) {
            const selectedNote = notes.find((note) => {
                return note.id === noteId
            })
            console.log(selectedNote)
            console.log(typeof(selectedNote))
            // return selectedNote.id
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