import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { render } from '@testing-library/react';
import './App.css';

// set the state inside the main App component
import Header from './Header';
import FoldersList from './FoldersList';
import AddFolderForm from './AddFolderForm';
import NotesList from './NotesList';
import AddNoteForm from './AddNoteForm';
import NOTES from './notes';


export default class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  // renderNavRoutes() {
  //   return <div>Placeholder for Nav Routes</div>

  // }

  // renderMainRoutes() {

  //   return <div>Placeholder for MainRoutes</div>

  // }

  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          {/* {this.renderNavRoutes()} */}
          <switch>
              <Route exact path='/' component={FoldersList} />
              <Route path='/add-folder' component={NavBack} />
              {/* Because I'm not using 'exact' here, folderID is available in line 56 too */}
              {/* Pass the folder object to here */}
              <Route path='/note/:folderID' component={FolderName} />
          </switch>
        </nav>
        <div className='Head__main'>
          <header className='App__header'>
            <h1>
              <Link path='/'>Noteful</Link>
            </h1>
          </header>
          <main className='App__main'>
            {/* {this.renderMainRoutes()} */}
            <switch>
              <Route exact path='/' component={NotesList} />
              <Route path='/add-note' component={AddNoteForm} />
              <Route path='/add-folder' component={AddFolderForm} />
              {/* Pass the note object to here */}
              <Route path='/note/:folderID/:noteID' component={NoteDisplay} />
            </switch>
          </main>
        </div>
      </div>
    );
  }
}




// {/* <nav className='App__nav'>
//   /* Display a list of folders with none selected */}
//   {/* <Route path='/' component={SideBar} /> */}

//   {/* The sidebar should display the folder list with the selected folder highlighted */}
//   {/* <Route path='fixed/:dynamic-folder route' component={SideBar} /> */}
          
//   {/* The sidebar should display the folder of the currently selected note as well as a "back" button. */}
//   {/* <Route path='note/:variable-note-id' component={SideBar} /> */}
// </nav>
// <header className='App__header'>
//   <Header />
//   {/* Every route will have the same header section, the app's title should be a link to the main route */}
// </header>
// <main className='App__main'>
//   {/* Display all of the available notes - note should show its name and modified date */}
//   {/* <Route path='/' component={MainMenu} /> */}
          
//   {/* The main section should display only the notes that are "in" the selected folder */}
//   {/* <Route path='fixed/:dynamic-folder route' component={Note} /> */}
          
//   {/* Display the currently selected notes name, modified date, and content */}
//   {/* <Route path='note/:variable-note-id' component={Note} /> */}
// </main> */}