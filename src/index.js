import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SongsContextProvider } from './context/songContext'
import { HashRouter as Router, } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SongsContextProvider><Router><App /></Router></SongsContextProvider>);
