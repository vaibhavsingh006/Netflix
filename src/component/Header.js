import React from 'react';
import logo from '../img/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

    const dispatch = useDispatch();

    const handelSearch = () => {
        dispatch(toggleGptSearchView())
    }

    const handelLanguage = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    return (
        <header className=' w-full relative'>
            <div className='absolute h-8 sm:h-14 mt-10 sm:mt-6 ml-6 z-20'>
                <img className='w-full h-full' src={logo} alt="logo" />
            </div>

            <div className=' absolute -right-32 sm:right-6 flex justify-center z-20 top-28  sm:top-8'>
                {
                    showGptSearch && <select className=" mr-8 border border-gray" onChange={handelLanguage}>
                        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)}
                    </select>
                }
                <button onClick={handelSearch} className='text-white bg-blue-900 px-4 py-3 font-bold rounded bg-opacity-60'>{showGptSearch ? "Go_Home" : "Get Search"}</button>
            </div>
        </header>
    )
}

export default Header;
