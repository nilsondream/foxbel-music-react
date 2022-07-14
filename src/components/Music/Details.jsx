import React, { useContext, useEffect, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { SongsContext } from '../../context/songContext'
import { useSong } from '../../hooks/useSong'
import { LoaderDetails } from '../Loader/Loader'

const Details = () => {
    const { playing, setPlaying } = useContext(SongsContext);
    const { track } = useSong();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [])

    if (isLoading) {
        return (<LoaderDetails />)
    } else {
        return (
            <div className='details-container'>
                <div className='artist-image'>
                    <img src={track?.artist?.picture_medium} alt={track?.artist?.name} />
                    {playing ? <FaPause /> : <FaPlay />}
                </div>
                <div className='artist-data' style={{ background: `url(${track?.album?.cover_xl}) center no-repeat` }}>
                    <div className='data-shadow' />
                    <div className='data-content'>
                        <div className='data-item'>
                            <h1>{track?.artist?.name}</h1>
                            <p>ID: {track?.artist?.id}</p>
                            <p>Type: {track?.artist?.type}</p>
                            <p className='text-lorem'>
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                                el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                                que se dedica a la imprenta).
                            </p>
                        </div>
                        <div className='data-btns'>
                            <button onClick={() => setPlaying(!playing)}>
                                {playing ? 'Pausar' : 'Reproducir'}
                            </button>
                            <button>Seguir</button>
                            <BsThreeDots />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details