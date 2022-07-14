import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LoaderDetails = () => {
    return (
        <div className='loader-skeleton'>
            <Skeleton height={250}/>
        </div>
    )
}

export const LoaderItems = () => {
    return (
        <div className='item-skeleton'>
            <div className="img-skeleton"><Skeleton height={200} width={200}/></div>
            <div className='data-skeleton'>
                <h3><Skeleton /></h3>
                <p><Skeleton /></p>
            </div>
        </div>
    )
}