import React from 'react'
import Music from '../components/Music/Music'
import Player from '../components/Player/Player'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {

    return (
        <>
            <div className='home-container'>
                <Sidebar/>
                <Music />
            </div>
            <Player />
        </>
    )
}

export default Home