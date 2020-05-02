import React from 'react'
import NotesContext from '../NotesContext'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import Note from '../Note/Note'


export default function RenderFolderPathMain(props) {
    // get the folderID from the url path
    const folderId = props.match.params.folderID;
    
    function generateNotesForFolderPath (notes) {

        const notesInFolder = notes.filter(note => 
            note['folder_id'].toString() === folderId.toString()
        )
        
        console.log(notesInFolder)
        
        const noteInstances = notesInFolder.map(note => 
            <Note
                id={note.id.toString()}
                key={note.id}
                note_name={note.note_name}
                modified_date={note.modified_date}
                folder_id={note.folder_id}
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
                    return generateNotesForFolderPath(context.notes)
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