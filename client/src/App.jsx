import React from 'react'
import Quiz from './components/Quiz/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>

    <Route
      path=''
      element={
        <Signup/>
      }>
      </Route>

      <Route
      path='/register'
      element={
        <Signup/>
      }>
      </Route>

      <Route
      path='/login'
      element={
        <Login/>
      }>
      </Route>

      <Route
      path='/quiz'
      element={
        <Quiz/>
      }>
      </Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App