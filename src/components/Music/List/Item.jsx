import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SongsContext } from '../../../context/songContext'
import { LoaderItems } from '../../Loader/Loader'

const Item = ({ artist, title, album, id }) => {
    const navigate = useNavigate();
    const { setPlaying, trackAudio, playing } = useContext(SongsContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2500);
    }, [])

    const track = () => {
        navigate(`/track/${id}`);
        setPlaying(true);
        trackAudio.current.setAttribute('autoPlay', 'true');
    }

    if (isLoading) {
        return (<LoaderItems />)
    } else {
        return (
            <div className='album-item'>
                <div className="item-img" onClick={track}>
                    <img src={album.cover_medium} alt={album.title} onClick={() => setPlaying(!playing)} />
                    <span className='dots'><BsThreeDotsVertical /></span>
                    <span className='play'><FaPlay /></span>
                </div>
                <div className='item-data'>
                    <h3>{title}</h3>
                    <p>{artist.name}</p>
                </div>
            </div>
        )
    }
}

export default Item