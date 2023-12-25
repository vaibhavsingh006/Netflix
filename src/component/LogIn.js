import React, { useState, useRef } from "react";
import Header from "./Header";
import bg from "../img/bg.jpg";
import { handelValidation } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firbase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LogIn = () => {
    const [isSign, setIsSign] = useState("Log In");
    const [errMessage, setErrMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const mob = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // console.log(isSign)
    const handelBtnLog = () => {
        // handelValidation

        // console.log(email.current.value);
        // console.log(password.current.value);

        // {
        //     isSign === 'Log In' ? '' : console.log(name.current.value);
        //     console.log(mob.current.value);
        // }

        // const message = handelValidation(
        //     email.current.value,
        //     password.current.value,
        // );
        // console.log(message);
        // setErrMessage(message);


        // if (message) return;


        if (isSign === 'Sign up') {
            // Sign In Logic
            // console.log('yoyo')
            createUserWithEmailAndPassword(auth, email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // user profile update
                    // updateProfile(user, {
                    //     displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/122105010?v=4"
                    // }).then(() => {
                    //     // Profile updated!
                    //     const { uid, email, displayName } = auth.currentUser;
                    //     dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                    //     navigate('/browser')
                    // }).catch((error) => {
                    //     // An error occurred
                    //     setErrMessage(error.message)
                    // });
                    // end user profile update
                    // console.log(user)
                    // ...
                    // setErrMessage(null)
                    // navigate('/browser')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrMessage(errorCode + ' - ' + errorMessage);
                });
        } else {
            //log in
            // console.log('yoyoelse')
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user)
                    // ...
                    setErrMessage(null)
                    navigate('/browser')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + ' - ' + errorMessage)
                });

        }
    };

    const handelSign = () => {
        setIsSign(isSign === "Log In" ? "Sign up" : "Log In");
    };

    return (
        <>
            <Header />
            <div className=" h-screen relative">
                <img className=" h-full w-full" src={bg} alt="background" />
            </div>
            <div className=" w-full h-full">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className=" bg-black bg-opacity-80 absolute mx-8 sm:m-0 sm:left-1/4 lg:left-1/3 top-32 p-14 sm:w-1/2 lg:w-1/3 px-8 sm:px-16 rounded-lg"
                >
                    <h2 className=" text-white font-bold text-2xl mb-4">{isSign}</h2>
                    <div className=" gap-4 flex flex-col">
                        {isSign === "Sign up" ? (
                            <input
                                ref={name}
                                type="text"
                                className=" w-full p-1 bg-gray-700 py-2 rounded"
                                placeholder="Full Name"
                            />
                        ) : (
                            ""
                        )}
                        {isSign === "Sign up" ? (
                            <input
                                ref={mob}
                                type="text"
                                className=" w-full p-1 bg-gray-700 py-2 rounded"
                                placeholder="mob No."
                            />
                        ) : (
                            ""
                        )}
                        <input
                            ref={email}
                            type="text"
                            className=" w-full p-1 bg-gray-700 py-2 rounded"
                            placeholder="Email Id"
                        />
                        <input
                            ref={password}
                            type="text"
                            className=" w-full p-1 bg-gray-700 py-2 rounded"
                            placeholder="Password"
                        />
                        <p className=" text-red-700 font-bold ">{errMessage}</p>
                        <button
                            className=" bg-red-600 w-full py-2 rounded mt-4"
                            onClick={handelBtnLog}
                        >
                            {isSign}
                        </button>
                        <div className=" flex gap-1 mt-1 text-white">
                            <input type="checkbox" />
                            <p>Don't Remember me</p>
                        </div>
                        <p className="text-white cursor-pointer" onClick={handelSign}>
                            {isSign === "Log In"
                                ? "New to Netflix? Sign up now."
                                : "already have an account."}
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LogIn;
