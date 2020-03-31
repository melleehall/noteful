import React from 'react'
import Folder from '../Folder/Folder'
import CircleButton from '../Buttons/CircleButton/CircleButton'

export default function RenderFolderPathSidebar(props) {
    const folders = props.folders.map(folder => 
        <Folder 
            key = {folder.id}
            id = {folder.id}
            name = {folder.name}
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


