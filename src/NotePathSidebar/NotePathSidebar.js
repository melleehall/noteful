import React from 'react'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import NotesContext from '../NotesContext'
import './NotePathSidebar.css'


export default function RenderNotePathSidebar(props) {
    const noteId = props.match.params.noteID;
    console.log(noteId)

    function findFolderName (context) {
        const allNotes = context.notes

        const selectedNote = allNotes.find(note => {
            if (note.id.toString() === noteId.toString()) {
                return note.folderId.toString()
            }
        })
        console.log(selectedNote)
        console.log(typeof(selectedNote))
        console.log(selectedNote['folderId'])
        
        return <div></div>
    }


    return (
        <section>
            <CircleButton 
                title = '< Back'
            />
            <h3 className='folder_name'>
                <NotesContext.Consumer>
                    {(context) => findFolderName(context)}
                </NotesContext.Consumer>
            </h3>
        </section>
    )
}