import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CompleteOrder from '../pages/CompleteOrder'
import Home from '../pages/Home'

export default function RegularRoute() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/complete-order" element={<CompleteOrder />} />
    </Routes>
  )
}
