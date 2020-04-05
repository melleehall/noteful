import React from 'react'
import Note from '../Note/Note'
import dummyNotes from '../dummyNotes'

export default function RenderNotePathMain(props) {
    // find note object with an id that matches the 
    // props.match.params.noteID of the selected note

    const noteID = props.match.params.noteID;
    
    // replace this w/ notes from context
    const notes = dummyNotes['notes']
    const note = notes.find(note => {
                    return note.id === noteID
                })            
    
    return(
        <section className='note'>
            <Note 
                id={note.id}
                name={note.name}
                modified={note.modified}
            />
            <div className='note_content'>
                {note.content}
            </div>
        </section>
    )
}

