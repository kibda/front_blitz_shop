"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, use, useContext, useEffect, useState } from 'react'

// init contxt wth null
const AppContext = createContext(null);

export function AppWrapper({ children } : {
    children: React. ReactNode;
    }) {
    //  const initialUserData = JSON.parse(localStorage.getItem('userData')) || {};
    let [userDataContxt, setUserDataContxt] = useState({})
    let [cart, setCart] = useState([]);
    const router = useRouter();


    const fetchCart = async () => {
        try {
          const resp = await axios.get(`${process.env.NEXT_PUBLIC_API}cart/view/`, { withCredentials: true });
          setCart(resp.data.data);
          console.log(resp.data.data);
        }
        catch (error) {
          console.error('Failed to fetch user acrt:', error);
        }
      }


    useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await axios.get(`${process.env.NEXT_PUBLIC_API}user/api/authenticated/`, {
                  withCredentials: true, // send cookies with the request
              });
              if (response.status === 200) {
                  setUserDataContxt(response.data.user);
                    fetchCart();
              } else {
                  setUserDataContxt(null);
                  router.push('/login');
              }
          } catch (error) {
              console.error('Failed to fetch user:', error);
              setUserDataContxt(null);
              router.push('/login');
          }
      };

      fetchUser();
  }, []);



    return (
        <AppContext.Provider value={{ userDataContxt, setUserDataContxt, cart, setCart }}>
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