'use client'

import { Fragment } from 'react';
import SearchResults from './results'
import { BrowserRouter } from 'react-router-dom'

export default function Page() {

  const comp = (typeof window !== 'undefined') ? (<BrowserRouter>
    <SearchResults/>
    </BrowserRouter>) : <Fragment/>

  return comp;
}
