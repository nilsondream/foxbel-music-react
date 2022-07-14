import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStepBackward, FaStepForward, FaPlay, FaPause, FaVolumeDown, FaVolumeUp, FaVolumeMute, FaVolumeOff, } from 'react-icons/fa'
import { SongsContext } from '../../context/songContext'
import { useSong } from '../../hooks/useSong'

const Player = () => {
    const { track } = useSong();
    const { playing, setPlaying, trackAudio, songs } = useContext(SongsContext);
    const { id } = useParams();
    const volumeAudio = useRef(null);
    const [volume, setVolume] = useState(100);

    let trackFilter = songs.filter((item) => item.id === parseInt(id));

    const toggle = () => {
        setPlaying(!playing);
    };

    useEffect(() => {
        playing ? trackAudio.current.play() : trackAudio.current.pause();

        trackAudio.current.addEventListener('ended', () => setPlaying(false));
    }, [playing, setPlaying, trackAudio]);

    const volumeChange = () => {
        trackAudio.current.volume = volumeAudio.current.value / 100;
        setVolume(volumeAudio.current.value);
    };

    return (
        <div className='player-container'>
            <div className='player-song'>
                <img src={trackFilter[0]?.album?.cover_medium || track?.album?.cover_medium}
                    alt={trackFilter[0]?.album?.title || track?.album?.title} />
                <div className='song-data'>
                    <h4>{trackFilter[0]?.title_short || track.title_short}</h4>
                    <p>{trackFilter[0]?.artist.name || track.artist?.name} - {trackFilter[0]?.album.title || track.album?.title}</p>
                </div>
            </div>

            <div className='player-music'>
                <FaStepBackward />
                <div className='play-pause' onClick={toggle}>
                    {playing ? <FaPause /> : <FaPlay />}
                    <audio src={trackFilter[0]?.preview || track?.preview} ref={trackAudio} ></audio>
                </div>
                <FaStepForward />
            </div>

            <div className='player-volume'>
                <input type='range' min='0' max='100' value={volume} ref={volumeAudio} onChange={volumeChange} />

                {volume >= 0 && volume <= 2 ? (
                    <FaVolumeMute />
                ) : volume >= 3 && volume <= 29 ? (
                    <FaVolumeOff />
                ) : volume >= 30 && volume <= 59 ? (
                    <FaVolumeDown />
                ) : volume >= 60 && volume <= 100 ? (
                    <FaVolumeUp />
                ) : null}
            </div>
        </div>
    )
}

export default Player