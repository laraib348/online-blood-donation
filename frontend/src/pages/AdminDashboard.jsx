import { useEffect, useState } from 'react'
import axios from 'axios'
import DonorCard from '../components/DonorCard'

function AdminDashboard() {

  const [donors, setDonors] = useState([])
  const [requests, setRequests] = useState([])

  // Fetch Donors
  const fetchData = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8000/api/donor/all'
      )

      setDonors(res.data.donors)
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch Blood Requests
  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8000/api/request/all'
      )

      setRequests(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  // Delete Donor
  const deleteDonor = async (id) => {
    await axios.delete(
      `http://localhost:8000/api/donor/delete/${id}`
    )

    fetchData()
  }

  useEffect(() => {
    fetchData()
    fetchRequests()
  }, [])

  return (
    <div className="container mt-5">

      {/* Dashboard Heading */}
      <h2 className="text-center mb-4">
        Admin Dashboard
      </h2>

      {/* Donors Section */}
      <h3 className="mb-3">All Donors</h3>

      <div className="row">

        {donors.map((d) => (
          <DonorCard
            key={d._id}
            donor={d}
            onDelete={deleteDonor}
          />
        ))}

      </div>

      {/* Blood Requests Section */}
      <div className="mt-5">

        <h3 className="mb-4">Blood Requests</h3>

        {requests.length === 0 ? (
          <p>No Blood Requests Found</p>
        ) : (
          requests.map((req) => (

            <div
              key={req._id}
              className="card mb-3 shadow-sm"
            >

              <div className="card-body">

                <h5 className="card-title">
                  {req.patientName}
                </h5>

                <p>
                  <strong>Blood Group:</strong>{' '}
                  {req.bloodGroup}
                </p>

                <p>
                  <strong>Age:</strong>{' '}
                  {req.age}
                </p>

                <p>
                  <strong>Hospital:</strong>{' '}
                  {req.hospital}
                </p>

                <p>
                  <strong>City:</strong>{' '}
                  {req.city}
                </p>

                <p>
                  <strong>Phone:</strong>{' '}
                  {req.phone}
                </p>

                <p>
                  <strong>Reason:</strong>{' '}
                  {req.reason}
                </p>

              </div>

            </div>

          ))
        )}

      </div>

    </div>
  )
}

export default AdminDashboard