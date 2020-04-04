import React from 'react'

const NotesContext = React.createContext({
    notes: [],
    folder: [],
    // deleteNote: () = {},
})

export default NotesContext