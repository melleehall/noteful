import React from 'react'
import Folder from '../Folder/Folder'
import CircleButton from '../Buttons/CircleButton/CircleButton'

export default function RenderFolderPathSidebar() {
    return (
        <section>
            <ul>
                <Folder />
            </ul>
            <div>
                <CircleButton />
            </div>
        </section>    
    )
}