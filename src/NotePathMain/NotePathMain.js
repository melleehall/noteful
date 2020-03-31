import React from 'react'
// import { Link } from 'react-router-dom'
import Note from '../Note/Note'

export default function RenderNotePathMain(props) {
    // find note object with an id that matches the 
    // props.match.params.noteID of the selected note

    return(
        <section className='note'>
            <Note 
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            />
            <div className='note_content'>
                {props.note.content}
            </div>
        </section>
    )
}

