import React from 'react'
import Folder from '../Folder/Folder'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import NotesContext from '../NotesContext'

export default function RenderHomePathSidebar(props) {
    function generateFolderInstances (folders) {
        const folderInstances = folders.map(folder =>
            <Folder
                id={folder.id}
                key={folder.id}
                name={folder.name}
            />     
        )
        return folderInstances
    }

    return (
        <section>
            <ul>
                <NotesContext.Consumer>
                    {(context) => {
                        return generateFolderInstances(context.folders)
                    }}
                </NotesContext.Consumer>
            </ul>
            <div>
                <CircleButton 
                    title = '+ Folder'
                />
            </div>
        </section>
    )
}