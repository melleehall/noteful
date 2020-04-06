import React from 'react'
import NotesContext from '../NotesContext'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import Note from '../Note/Note'


export default function RenderFolderPathMain(props) {
    // get the folderID from the url path
    const folderId = props.match.params.folderID;

    function generateNotesForFolderPath (notes) {
        const notesInFolder = notes.filter(note => 
            note.folderId === folderId
        )
        const noteInstances = notesInFolder.map(note => 
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
                    return generateNotesForFolderPath(context.notes)
                }}
                </NotesContext.Consumer>
            </ul>
            <div>
                <CircleButton 
                    title = "+ Note"
                />
            </div>
        </section>
    )
}