'use client'

import HomePage from './pages/home'
import { BrowserRouter } from 'react-router-dom'

export default function Page() {
  return (
    <BrowserRouter>
    <HomePage/>
    </BrowserRouter>
  )
}
