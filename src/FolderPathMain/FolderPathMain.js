import React from 'react'
import dummyNotes from '../dummyNotes'
import CircleButton from '../Buttons/CircleButton/CircleButton'
import { Route } from 'react-router-dom'


export default function RenderFolderPathMain(props) {
    // const folderId = Route.props.match.params;
    // console.log(folderId)
    
    // const folderId = routeProps.match.params;
    //     return <FolderPathMain
    //       folderId = {folderId.folderID}
    //       notes = {this.state.notes}
    //     />
    //   }}


    // const notesInFolder = props.notes.filter(note => 
    //     note.folderId === props.folderId
    // )
    
    // const notes = notesInFolder.map(note => 
    //     <Note
    //         id={note.id}
    //         key={note.id}
    //         name={note.name}
    //         modified={note.modified}
    //         folderId={note.folderId}
    //         content={note.content}
    //     /> 
    // )
    
    return (
        <section>
            {/* <ul>
                {notes}
            </ul> */}
            <div>
                <CircleButton 
                    title = "+ Note"
                />
            </div>
        </section>
    )
}