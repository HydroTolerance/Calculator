import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calculator from './page/Calculator'
import Error from './page/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Calculator/>}></Route>
          <Route path='/Calculator' element={<Calculator/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
