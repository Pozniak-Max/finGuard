import AuthForm from '@/components/AuthForm'
import React from 'react'
import { Suspense } from 'react'

const signIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-in"/>
    </section>
  ) 
}

export default signIn