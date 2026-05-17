import { useState } from 'react'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password
      })

      alert('Login Success')
      window.location.href = '/admin'

    } catch (err) {
      alert('Invalid Login')
    }
  }

  return (
    <div className="container mt-5">

      <h2 className="text-center">Admin Login</h2>

      <form className="w-50 mx-auto" onSubmit={handleLogin}>

        <input className="form-control my-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input className="form-control my-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-danger w-100">
          Login
        </button>

      </form>

    </div>
  )
}

export default Login