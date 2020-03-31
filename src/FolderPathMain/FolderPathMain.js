import React from 'react'
import Note from '../Note/Note'
import CircleButton from '../Buttons/CircleButton/CircleButton'


export default function RenderFolderPathMain() {
    return (
        <section>
            <ul>
                <Note />
                <Note />
                <Note />
            </ul>
            <div>
                <CircleButton />
            </div>
        </section>
    )
}