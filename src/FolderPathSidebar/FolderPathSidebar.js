import React from 'react'
import Folder from '../Folder/Folder'
import NotesContext from '../NotesContext'
import CircleButton from '../Buttons/CircleButton/CircleButton'

export default function RenderFolderPathSidebar(props) {
    function generateFolderInstances (folders) {
        const folderInstances = folders.map(folder =>
            <Folder
                id={folder.id.toString()}
                key={folder.id}
                folder_name={folder.folder_name}
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
                    path={'/add-folder'}
                    title={'+ Folder'}
                />
            </div>
        </section>
    )
}


