import React, { Component } from 'react'
import NotesContext from '../NotesContext'
import ValidationError from '../ValidationError'
import config from '../config'
import './AddNoteMain.css'

// outstanding - add validation to ensure the name of the note is not left blank
// ensure errors are properly handled

export default class AddFolder extends Component {
    static contextType = NotesContext;

    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            folderID: {
                value: '',
                touched: false
            }
        }
    }

    updateName(name) {
        this.setState({ name: { value: name, touched: true }});
    }

    updateContent(content) {
        this.setState({ content: { value: content, touched: true }});
    }

    updateFolder(folderID) {
        this.setState({ folderID: { value: folderID, touched: true }});
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        }  else if (name.length < 2) {
            return 'Name must be at least 2 characters long'
        } 
    }

    validateContent() {
        const content = this.state.content.value.trim();
        if (content.length === 0) {
            return 'Content is required';
        } else if (content.length < 10) {
            return 'Content must be at least 10 characters long'
        }
    }

    validateFolder(folder) {
        const folderID = this.state.folderID.value;
        if (folderID === "" || folderID === "Please, select a folder.") {
            return 'Must select an existing folder for this note.'
        }
        
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, content, folder } = this.state;

        const newNote = {
            name: event.target['new-note-name'].value,
            content: event.target['new-note-content'].value,
            folderId: event.target['folder-id'].value,
            modified: new Date()
        }

        fetch(`${config.API_ENDPOINT_NOTES}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote),
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(note => {
            this.context.addNoteToState(note)
            this.props.history.push('/')
        })
        .catch(e => console.log(e))
    }


    render () {
        const nameError = this.validateName();
        const contentError = this.validateContent();
        const folderError = this.validateFolder();

        return (
            <section className='add_note_container'>
                <h2>Create a note</h2>
                    <form className='add_note_form' onSubmit={e => this.handleSubmit(e)}>
                        <div className='add_note_fields'>
                            <label htmlFor='new-note-name'>
                                Name
                            </label>
                            <input type='text' name='new-note-name' id='new-note-name'
                                onChange={e => this.updateName(e.target.value)}/>
                            {this.state.name.touched && <ValidationError message={nameError} />}
                            <label htmlFor='new-note-content'>
                                Content
                            </label>
                            <input type='text' name='new-note-content' id='new-note-content'
                                onChange={e => this.updateContent(e.target.value)}/>
                            {this.state.content.touched && <ValidationError message={contentError} />}
                            <label htmlFor='folder-select'>
                                Folder
                            </label>
                            <select id='folder-select' name='folder-id' 
                                onChange={e => this.updateFolder(e.target.value)}>
                                <option value={null}>Please, select a folder.</option>
                                {this.context.folders.map(folder => 
                                    <option key={folder.id} value={folder.id}>
                                        {folder.name}
                                    </option>    
                                )}
                            </select>
                            {this.state.folderID.touched && <ValidationError message={folderError} />}
                        </div>
                        <button 
                            type='submit' 
                            className='submit_button'
                            disabled={
                                this.validateName() ||
                                this.validateContent() ||
                                this.validateFolder()
                            }
                        >
                            Add Note
                        </button>
                    </form>
            </section>
        )
    }
}

