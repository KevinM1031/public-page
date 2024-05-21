import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dev from './components/Dev'
import Layout from './components/Layout'
import Placeholder from './components/Placeholder'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/lang" element={<Placeholder />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
