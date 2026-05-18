import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import DonorList from './pages/DonorList'
import RequestBlood from './pages/RequestBlood'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/donors" element={<DonorList />} />
        <Route path="/request" element={<RequestBlood />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App