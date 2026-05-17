import { useState } from 'react'
import axios from 'axios'

function Register() {

  const [form, setForm] = useState({
    name: '',
    bloodGroup: '',
    city: '',
    age: '',
    phone: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:8000/api/donor/add', form)

    alert('Donor Added')
  }

  return (
    <div className="container mt-5">

      <h2 className="text-center">Register Donor</h2>

      <form className="w-50 mx-auto" onSubmit={submit}>

        <input name="name" className="form-control my-2"
          placeholder="Name" onChange={handleChange} />

        <input name="bloodGroup" className="form-control my-2"
          placeholder="Blood Group" onChange={handleChange} />

        <input name="city" className="form-control my-2"
          placeholder="City" onChange={handleChange} />

        <input name="age" className="form-control my-2"
          placeholder="Age" onChange={handleChange} />

        <input name="phone" className="form-control my-2"
          placeholder="Phone" onChange={handleChange} />

        <button className="btn btn-danger w-100">
          Submit
        </button>

      </form>

    </div>
  )
}

export default Register