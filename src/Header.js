import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <h1>
                <NavLink to='/'>
                    noteful
                </NavLink>
            </h1>
        )
    }
}