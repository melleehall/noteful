import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import './Note.css'
import NotesContext from '../NotesContext'
import PropTypes from 'prop-types'

function deleteNoteRequest(noteId, cb) {
    fetch(config.API_ENDPOINT_NOTES + `/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
      })
    .then(data => {
        cb(noteId)
    })
    .catch(e => {
        console.error(e)
    })
}

export default function RenderNote(props) {
    const { note_name, id, modified_date } = props;
 
    return (
        <NotesContext.Consumer>
            {(context) => (
                <li key={id}>
                <div className='flex-column'>
                    <h2>
                        <Link to={`/note/${id}`}>
                            {note_name}
                        </Link>
                    </h2>
                <div>Modified: {modified_date}</div>
                <button 
                    className="Note__delete" 
                    type="button"
                    onClick={() => {
                        deleteNoteRequest(
                            id,
                            context.removeNoteFromState,
                        )
                    }}>
                    <svg aria-hidden="true" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"></path></svg> 
                </button>
                </div>
                </li>
            )}
        </NotesContext.Consumer>
    )
}

RenderNote.propTypes = {
    note_name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    modified_date: (props, propName, componentName) => {
        const prop = props[propName];
    
        if(!prop) {
          return new Error(`${propName} is required in ${componentName}. Validation Failed`);
        }
    
        if (typeof prop != 'string') {
          return new Error(`Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`);
        }
    
        if (prop.length !== 24) {
          return new Error(`Invalid prop, ${propName} date should be exactly 24 characters in length. Validation Failed.`);
        }
      },
}