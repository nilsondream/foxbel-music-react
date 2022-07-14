import React from 'react'
import Details from './Details'
import Search from './Search'
import List from './List/List'

const Music = () => {
    return (
        <div className='music-container'>
            <Search />
            <Details />
            <List />
        </div>
    )
}

export default Music