import React from 'react'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import dummyNotes from '../dummyNotes'
import './NotePathSidebar.css'



export default function RenderNotePathSidebar(props) {
    const noteID = props.match.params.noteID;
    
    // replace this w/ notes from context
    // const notes = dummyNotes['notes']
    const note = dummyNotes['notes'].find(note => {
                    return note.id === noteID
                })            
    const folderId = note.folderId
    const folder = dummyNotes['folders'].find(folder => {
                    return folder.id === folderId
                })


    return (
        <section>
            <CircleButton 
                title = '< Back'
            />
            <h3 className='folder_name'>
                {folder.name}
            </h3>
        </section>
    )
}