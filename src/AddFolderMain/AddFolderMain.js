import React, { Component } from 'react'
import NotesContext from '../NotesContext'
import ValidationError from '../ValidationError'
import './AddFolderMain.css'
import config from '../config'

// outstanding - ensure errors are properly handled

export default class AddFolderMain extends Component {
    static contextType = NotesContext;

    constructor(props) {
        super(props);
        
        this.state = {
            name: {
                value: '',
                touched: false
            },
            error: false,
        }
    }

    updateName(name) {
        this.setState({ name: { value: name, touched: true }});
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        }  else if (name.length < 2) {
            return 'Name must be at least 2 characters long'
        } 
    }

    renderErrorMessage() {
        const errorStat = this.state.error;
        if (errorStat) {
            return 'We are experiencing an issue adding your folder.  Please, try again later and contact your administrator if the issue persists.'
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const newFolder = {
            name: event.target['new-folder-name'].value
        }

        fetch(`${config.API_ENDPOINT_FOLDERS}`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newFolder),
          })
          .then(res => {
            if(!res.ok) {
              throw new Error(res.status)
            }
            return res.json()
          })
          .then(folder => {
            this.context.addFolderToState(folder)
            this.props.history.push('/')
          })
          .catch(e => {
            console.log(e);
            this.setState({error: true})
          })
    }

    render () {
        const nameError = this.validateName();
        const fetchError = this.renderErrorMessage();

        return (
            <section className='add_folder_container'>
                <h2>Create a folder</h2>
                    
                    <form className='add_folder_form' onSubmit={e => this.handleSubmit(e)}>
                        <div className='add_folder_field'>
                            <label htmlFor='new-folder-name'>
                                Name
                            </label>
                            <input type='text' name='new-folder-name' id='new-folder-name'
                                onChange={e => this.updateName(e.target.value)} aria-required="true" aria-describedby="folderNameError"/>
                            {this.state.name.touched && <ValidationError id="folderNameError" message={nameError} />}
                        </div>
                        <button 
                            type='submit' 
                            className='submit_button'
                            disabled={
                                this.validateName()
                            }>
                            Add Folder
                        </button>
                        {<ValidationError message={fetchError} />}
                    </form>
            </section>
        )
    }
}

