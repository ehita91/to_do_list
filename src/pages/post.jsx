import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function post() {
    const router = useRouter();
  return (
    <div>
        <h1>POST #1 {router.query.id}</h1>
        <p> This is the current post #....</p>
    </div>
  )
}


export default post