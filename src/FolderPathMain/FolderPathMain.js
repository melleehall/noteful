import React from 'react'
import Note from '../Note/Note'
import CircleButton from '../Buttons/CircleButton/CircleButton'


export default function RenderFolderPathMain(props) {
    const notesInFolder = props.notes.filter(note => 
        note.folderId === props.folderId
    )
    
    const notes = notesInFolder.map(note => 
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
                    title = "+ Note"
                />
            </div>
        </section>
    )
}