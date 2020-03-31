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
              <Route path='/folder/:folderID' component={FolderPathSidebar} />
              <Route path='/note/:noteID' 
                  render={(routerProps) => 
                  <NotePathSidebar 
                    folders = {this.state.folders}
                    notes = {this.state.notes} 
                  />
                  } 
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
              <Route path='/folder/:folderID' component={FolderPathMain} />
              <Route 
                path='/note/:noteID' 
                render={(routerProps) => 
                  <NotePathMain
                    folders = {this.state.folders}
                    notes = {this.state.notes} 
                  />
                  }
                />
              <Route component={NotFoundMain} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

