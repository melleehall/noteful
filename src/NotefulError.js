import React, { Component } from 'react'

export default class NotefulError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>An error has occured. Please, try again later and if the problem persists, contact your administrator. </h2>
            )
        } return this.props.children;
    }
}