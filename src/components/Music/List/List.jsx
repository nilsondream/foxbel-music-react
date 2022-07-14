import React from 'react'
import ItemGrid from './ItemGrid'

const List = () => {
    return (
        <div className='list-result'>
            <h2 className='title-result'>Resultados</h2>
            <div className='music-list-grid'><ItemGrid /></div>
        </div>
    )
}

export default List