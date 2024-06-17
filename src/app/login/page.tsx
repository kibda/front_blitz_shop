"use client";

import React, { useEffect } from 'react'
import {LoginTemplate} from '../../components/loginTemp/login-template'
import { useAppContext } from '@/contexts/UserContext';
import { useRouter } from 'next/navigation';


const Login = () => {

const {userDataContxt, setUserDataContxt} = useAppContext();
const router = useRouter();

useEffect(() => {
  if (Object.keys(userDataContxt).length !== 0) {
    router.push('/'); 
  }
}, [userDataContxt, router]);



  return (
    <LoginTemplate />
  )
}

export default Login