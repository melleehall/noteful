import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import dummyNotes from './dummyNotes'
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
  constructor(props) {
    super(props);
    this.state = {
      notes: dummyNotes.notes,
      folders: dummyNotes.folders,
    }
  }


  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          <Switch>
              <Route 
                exact path='/' 
                render={(routerProps) => 
                  <HomePathSidebar 
                    folders = {this.state.folders}
                    notes = {this.state.notes}
                  />
                }
              />
              <Route 
                path='/folder/:folderID' 
                render={routeProps => (
                  <FolderPathSidebar 
                    folders={this.state.folders}
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
                render={(routerProps) => 
                  <HomePathMain 
                    notes = {this.state.notes}
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
      </div>
    );
  }
}

