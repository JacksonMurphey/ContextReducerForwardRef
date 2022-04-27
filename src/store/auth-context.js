import React, { useState, useEffect } from 'react'


const AuthContext = React.createContext({
    user: { name: '', age: '' },
    setLoggedInUser: (name, age) => { },
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
})


//This will be my wrapper for my application to allow for the passing of context, and for Context management
export const AuthContextProvider = (props) => {

    const [user, setUser] = useState({
        name: '',
        age: ''
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
        const storedUserInfo = localStorage.getItem('isLoggedIn')
        if (storedUserInfo === '1') { setIsLoggedIn(true) }
    }, [])

    const userHandler = (name, age) => {
        setUser({ name: name, age: age })
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1') // 1 = true, 0 = false
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider value={{
            user: user,
            setLoggedInUser: userHandler,
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext