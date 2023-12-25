import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <>
            <img className=' border border-white rounded-sm' src={IMG_CDN_URL + posterPath} alt="MOVIE IMG" />

        </>
    )
}

export default MovieCard;