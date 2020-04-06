import React from 'react'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import NotesContext from '../NotesContext'
import './NotePathSidebar.css'


export default function RenderNotePathSidebar(props) {
    const noteId = props.match.params.noteID;

    function findFolderName (context) {
        const selectedNote = context.notes.find(note => 
           note.id.toString() === noteId.toString()
        )
        if(!selectedNote) {
            props.history.push('/')
            return;
        }
        console.log(selectedNote)

        const folderID = selectedNote['folderId']
    
        const folder = context.folders.find(folder => 
            folder.id.toString() === folderID.toString()
        )
        
        return <div>{folder['name']}</div>
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