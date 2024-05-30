import React from 'react'
import { Suspense } from 'react'

const signIn = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div> signIn</div>
    </Suspense>
  )
}

export default signIn