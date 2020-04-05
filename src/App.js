import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
    console.log(noteId)
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
      folders: this.state.folders,
      deleteBookmark: this.removeNoteFromState,
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
              <Route 
                path='/folder/:folderID' 
                component={FolderPathSidebar}
              />
              <Route 
                path='/note/:noteID' 
                component={NotePathSidebar} 
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
              <Route 
                path='/folder/:folderID' 
                component={FolderPathMain}
              />
              <Route 
                path='/note/:noteID' 
                component={NotePathMain} />
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

