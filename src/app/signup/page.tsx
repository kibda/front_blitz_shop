"use client";

import { SignupTemplate } from '@/components/signupTemp/signupTemp'
import { useAppContext } from '@/contexts/UserContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const signup = () => {
  const {userDataContxt, setUserDataContxt} = useAppContext();
  const router = useRouter();

    useEffect(() => {
      if (Object.keys(userDataContxt).length !== 0) {
        router.push('/'); 
      }
    }, [userDataContxt, router]);
  
  return (
    <SignupTemplate />
  )
}

export default signup