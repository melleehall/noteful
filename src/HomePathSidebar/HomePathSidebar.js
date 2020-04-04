import React from 'react'
import Folder from '../Folder/Folder'
import dummyNotes from '../dummyNotes'
import CircleButton from '../Buttons/CircleButton/CircleButton'

export default function RenderHomePathSidebar(props) {
    const storeFolders = dummyNotes.folders

    const folders = storeFolders.map(folder => 
            <Folder 
                key={folder.id}
                name={folder.name}
            /> 
    )

    return (
        <section>
            <ul>
                {folders}
            </ul>
            <div>
                <CircleButton 
                    title = '+ Folder'
                />
            </div>
        </section>
    )
}