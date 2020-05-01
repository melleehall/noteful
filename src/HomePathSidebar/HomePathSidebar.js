import React from 'react'
import Folder from '../Folder/Folder'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import NotesContext from '../NotesContext'
import NotefulError from '../NotefulError'

export default function RenderHomePathSidebar(props) {
    function generateFolderInstances (folders) {
        const folderInstances = folders.map(folder =>
            <NotefulError>
            <Folder
                id={folder.id}
                key={folder.id}
                folder_name={folder.folder_name}
            />     
            </NotefulError>
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
                    path={'/add-folder'}
                    title = {"+ Folder"}
                />
            </div>
        </section>
    )
}