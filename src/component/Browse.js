import React, { useEffect } from 'react'
import Header from './Header'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firbase'
import { useNavigate } from 'react-router-dom'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRated from '../hooks/useTopRated'
import { useDispatch, useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browse = () => {

    // const dispatch = useDispatch();

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    const navigate = useNavigate();

    const handelSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }


    // movies api
    useNowPlayingMovies();

    // popular
    usePopularMovies();

    // TopRated
    useTopRated();


    return (
        <div className=''>
            <div className=' flex justify-between w-full'>
                <Header />
                <button onClick={handelSignOut} className=' cursor-pointer font-bold z-20 text-white mt-8 mr-10 bg-zinc-900 px-4 sm:px-5 py-3 w-40 sm:w-32 rounded bg-opacity-70 relative left-6 sm:left-0'>Sign Out</button>
            </div>
            {
                showGptSearch ? <GptSearch /> : <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }

        </div>
    )
}

export default Browse;