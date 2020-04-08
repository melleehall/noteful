import React from 'react'

const NotesContext = React.createContext({
    notes: [],
    folder: [],
    removeNoteFromState: () => {},
    addFolderToState: () => {},
    addNotetoState: () => {}
})

export default NotesContext