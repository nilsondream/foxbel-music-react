import { createContext, useRef, useState } from 'react'

export const SongsContext = createContext({});

export const SongsContextProvider = ({ children }) => {
    const [songs, setSongs] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);
    const trackAudio = useRef(null);

    return (
        <SongsContext.Provider
            value={{
                songs,
                setSongs,
                playing,
                setPlaying,
                trackAudio,
                autoPlay,
                setAutoPlay,
            }}
        >
            {children}
        </SongsContext.Provider>
    );
};