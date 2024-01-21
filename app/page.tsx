'use client'

import { Fragment } from 'react'
import HomePage from './home/home'
import { BrowserRouter } from 'react-router-dom'

export default function Page() {

  const comp = (typeof window !== 'undefined') ? (<BrowserRouter>
    <HomePage/>
    </BrowserRouter>) : <Fragment/>

  return comp;
}
