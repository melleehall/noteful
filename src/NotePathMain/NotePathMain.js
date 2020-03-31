import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note/Note'

export default function RenderNotePathMain(props) {
    const id = props.computerMatch;

    console.log(id)

    return(
        <section className='note'>
            {/* <Note 
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            /> */}
            <div className='note_content'>
                {/* {noteContent} */}
            </div>
        </section>
    )
}

