import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video h-screen absolute top-0 flex justify-center flex-col pl-11 bg-gradient-to-r from-black z-10'>
            <div className='relative z-10'>
                <h1 className='relative text-white text-3xl sm:text-5xl mb-5 mt-16 sm:font-bold pr-11'>{title}</h1>
                <p className='relative text-white hidden sm:w-1/2 sm:block'>{overview}</p>
            </div>
            <div className='z-10 text-white font-semibold gap-8 flex ml-3 mt-6'>
                <button className=' bg-white text-black px-8 py-2 rounded hover:bg-opacity-90'>▶ Play</button>
                <button className='bg-slate-500 px-9 py-2 rounded bg-opacity-30'>info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
