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
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyNotes), 600);
}

  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          <Switch>
              <Route 
                exact path='/' 
                render={() => 
                  <HomePathSidebar 
                    folders = {this.state.folders}
                  />
                }
              />
              <Route path='/folder/:folderID' component={FolderPathSidebar} />
              <Route path='/note/:noteID' component={NotePathSidebar} />
              <Route component={NotFoundSidebar} />
          </Switch>
        </nav>
        <div className='Head__main'>
          <header className='App__header'>
              <Header/>
          </header>
          <main className='App__main'>
            <Switch>
              <Route exact path='/' component={HomePathMain} />
              <Route path='/folder/:folderID' component={FolderPathMain} />
              <Route path='/note/:noteID' component={NotePathMain} />
              <Route component={NotFoundMain} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

