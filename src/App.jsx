import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Make from './struct/Make'
import For_b from './pages/For_b'
import For_p from './pages/For_p'
import Application from './pages/Application'
import Main from './pages/Main'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Make><Main /></Make>} />
        <Route path="/Main" element={<Make><Main /></Make>} />
        <Route path="/For_b" element={<Make><For_b /></Make>} />
        <Route path="/For_p" element={<Make><For_p /></Make>} />
        <Route path="/Application" element={<Make><Application /></Make>} />
        <Route path="/Login" element={<Make><Login /></Make>} />
      </Routes>
    </Router>
  )
}

export default App
