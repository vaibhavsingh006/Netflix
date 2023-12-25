import React from 'react'
import LogIn from './LogIn'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { auth } from '../utils/firbase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <LogIn />,
        },
        {
            path: '/browser',
            element: <Browse />,
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, () => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                // dispatch(addUser())
            } else {
                // dispatch(removeUser())
            }
        })
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body