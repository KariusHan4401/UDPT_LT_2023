import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegularRoute from './regular'

export default function WebRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RegularRoute />} />
      </Routes>
    </BrowserRouter>
  )
}
