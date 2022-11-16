import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from '../Screens/Login'
import Home from '../home'

export default function AppRouter() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login/>} ></Route>
            <Route path='home' element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
