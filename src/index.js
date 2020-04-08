import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NotefulError from './NotefulError'

ReactDOM.render(<BrowserRouter>
                <NotefulError>
                    <App />
                </NotefulError>
                </BrowserRouter>, 
            document.getElementById('root')
        );

