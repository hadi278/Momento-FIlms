import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutMomento from './pages/About-Momento'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/about-momento' element={<AboutMomento/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
