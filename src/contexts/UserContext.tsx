"use client";
import { createContext, use, useContext, useEffect, useState } from 'react'

// Initialize the context with null
const AppContext = createContext(null);

export function AppWrapper({ children } : {
    children: React. ReactNode;
    }) {
      const initialUserData = JSON.parse(localStorage.getItem('userData')) || {};
    let [userDataContxt, setUserDataContxt] = useState(initialUserData)


    useEffect(() => {
        //get local storage value and set it to the state
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setUserDataContxt(userData);
        }
    },[])

    return (
    <AppContext.Provider value={[userDataContxt, setUserDataContxt]}>
    {children}
    </AppContext.Provider >
    )
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
      throw new Error('useAppContext must be used within a AppWrapper');
    }
    return context;
}