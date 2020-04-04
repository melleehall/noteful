import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import dummyNotes from './dummyNotes'
import NotesContext from './NotesContext'
import config from './config'
import './App.css'

import Header from './Header/Header';
import HomePathMain from './HomePathMain/HomePathMain';
import HomePathSidebar from './HomePathSidebar/HomePathSidebar';
import FolderPathMain from './FolderPathMain/FolderPathMain';
import FolderPathSidebar from './FolderPathSidebar/FolderPathSidebar';
import NotePathMain from './NotePathMain/NotePathMain';
import NotePathSidebar from './NotePathSidebar/NotePathSidebar';
import NotFoundMain from './NotFoundMain/NotFoundMain';
import NotFoundSidebar from './NotFoundSidebar/NotFoundSidebar';



export default class App extends Component {
  state = {
    notes: [],
    folders: [],
    error: null,
  }

  setNotes = notes => {
    this.setState({
      notes,
      error: null,
    })
  }

  setFolders = folders => {
    this.setState({
      folders,
      error: null,
    })
  }

  removeNoteFromState = noteId => {
    const newNotes = this.state.notes.filter(n => 
      n.id !== noteId
    )
    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT_NOTES, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(this.setNotes)
    .catch(e => this.setState({ e }));

    fetch(config.API_ENDPOINT_FOLDERS, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(this.setFolders)
    .catch(e => this.setState({ e }))
  }


  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders
    }

    return (
      <div className='App'>
        <NotesContext.Provider value={contextValue}>
        <nav className='App__nav'>
          <Switch>
              <Route 
                exact path='/' 
                component={HomePathSidebar}
              />
                }
              />
              <Route 
                path='/folder/:folderID' 
                component={FolderPathSidebar}
              />
                )}
              />
              <Route 
                path='/note/:noteID' 
                component={(props) => {
                  const noteID = props.match.params.noteID;
                  const note = this.state.notes.find(note => {
                    return note.id === noteID
                  })
                  const folder = this.state.folders.find(folder => {
                    return folder.id === note.folderId
                  })
                  return <NotePathSidebar 
                    folder = {folder}
                  />
                }}
              />
              <Route component={NotFoundSidebar} />
          </Switch>
        </nav>
        <div className='Head__main'>
          <header className='App__header'>
              <Header/>
          </header>
          <main className='App__main'>
            <Switch>
              <Route 
                exact path='/' 
                component={HomePathMain}
              />
                }
              />
              <Route 
                path='/folder/:folderID' 
                component={(routeProps) => {
                  const folderId = routeProps.match.params;
                  return <FolderPathMain
                    folderId = {folderId.folderID}
                    notes = {this.state.notes}
              />
                }}
              />
              <Route 
                path='/note/:noteID' 
                component={(props) => {
                  const noteID = props.match.params.noteID;
                  const note = this.state.notes.find(note => {
                    return note.id === noteID
                  })
                  return <NotePathMain
                    note = {note}
                  />
                }}
              />
              <Route component={NotFoundMain} />
            </Switch>
          </main>
        </div>
        </NotesContext.Provider>
      </div>
    );
  }
}

