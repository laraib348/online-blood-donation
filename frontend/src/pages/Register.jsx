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

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const res = await axios.post(
        'http://localhost:8000/api/donor/add',
        form
      )

      console.log(res.data)
      alert(res.data.message || 'Donor Added')

      // reset form
      setForm({
        name: '',
        bloodGroup: '',
        city: '',
        age: '',
        phone: ''
      })

    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message)
      alert(error.response?.data?.message || "Server Error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mt-5">

      <h2 className="text-center">Register Donor</h2>

      <form className="w-50 mx-auto" onSubmit={submit}>

        <input name="name" className="form-control my-2"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input name="bloodGroup" className="form-control my-2"
          placeholder="Blood Group"
          value={form.bloodGroup}
          onChange={handleChange}
          required
        />

        <input name="city" className="form-control my-2"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />

        <input name="age" className="form-control my-2"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <input name="phone" className="form-control my-2"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <button className="btn btn-danger w-100" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>

    </div>
  )
}

export default Register