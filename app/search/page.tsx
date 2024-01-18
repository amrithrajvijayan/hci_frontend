'use client'

import SearchResults from './results'
import { BrowserRouter } from 'react-router-dom'

export default function Page() {
  return (
    <BrowserRouter>
      <SearchResults />
    </BrowserRouter>
      )
}
