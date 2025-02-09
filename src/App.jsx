import { useState } from 'react'
import Header from './components/layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/layout/DefaultLayout'
import DashboardLayout from './components/layout/DashboardLayout'
import SignIn from './components/pages/SignIn'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<SignIn/>}></Route>

            <Route path='dashboard' element={<DashboardLayout/>}>

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
    </>
  )
}

export default App
