import React from 'react'

const NotesContext = React.createContext({
    notes: [],
    folder: [],
    removeNoteFromState: () => {},
})

export default NotesContext