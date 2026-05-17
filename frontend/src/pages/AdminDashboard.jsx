import { useEffect, useState } from 'react'
import axios from 'axios'
import DonorCard from '../components/DonorCard'

function AdminDashboard() {

  const [donors, setDonors] = useState([])

  const fetchData = async () => {
    const res = await axios.get('http://localhost:8000/api/donor/all')
    setDonors(res.data.donors)
  }

  const deleteDonor = async (id) => {
    await axios.delete(`http://localhost:8000/api/donor/delete/${id}`)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <div className="row">

        {donors.map((d) => (
          <DonorCard key={d._id} donor={d} onDelete={deleteDonor} />
        ))}

      </div>

    </div>
  )
}

export default AdminDashboard