import React, { Component } from 'react'
import CircleButton from '../Buttons/CircleButton/CircleButton'

// form should submit the name of the new folder to the POST /folders endpoint on the server

// ensure errors are properly handled

// add a button to the navigation to invoke the new form

export default class AddFolderSidebar extends Component {
  
    render () {
        return (
            <section>
                <CircleButton 
                    path='/'
                    title='< Back'
                />
            </section>
        )
    }
}