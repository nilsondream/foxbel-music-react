import { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getSongs, getTracks } from '../api'
import { SongsContext } from '../context/songContext'

export const useSong = () => {
    const { songs, setSongs } = useContext(SongsContext);
    const [track, setTrack] = useState({});

    const { id } = useParams();

    let currentId = id;

    let location = useLocation();
    const currentTrack = location.search.slice(3);

    const keywordToUse = currentTrack || localStorage.getItem('lastKeyword') || '22gz';

    const IdToUse = currentId || localStorage.getItem('lastId') || '1656946772';

    useEffect(() => {
        getSongs({
            artist: currentTrack ? currentTrack : keywordToUse,
        }).then((data) => {
            setSongs(data);
        });
        localStorage.setItem('lastKeyword', keywordToUse);
    }, [setSongs, currentTrack, keywordToUse]);

    useEffect(() => {
        getTracks({ id: currentId ? currentId : IdToUse }).then((data) => {
            setTrack(data);
        });

        localStorage.setItem('lastId', IdToUse);
    }, [setTrack, songs, id, currentId, IdToUse]);

    return { songs, track };
};