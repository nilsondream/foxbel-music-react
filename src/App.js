import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import './style/GlobalStyle.scss'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/track/:id' element={<Home />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default App