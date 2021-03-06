import React, { useContext } from 'react'
import { SongsContext } from '../../../context/songContext'
import Item from './Item'

const ItemGrid = () => {
    const { songs, loading } = useContext(SongsContext)

    return (
        <>
            {!loading && songs.length > 0 && songs.map((song, index) => <Item key={index} {...song} />)}
        </>
    )
}

export default ItemGrid