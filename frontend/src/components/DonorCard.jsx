function DonorCard({ donor, onDelete }) {
  return (
    <div className="col-md-4 mb-4">

      <div className="card p-3 shadow">

        <h5 className="text-danger">{donor.name}</h5>

        <p><b>Blood:</b> {donor.bloodGroup}</p>
        <p><b>City:</b> {donor.city}</p>
        <p><b>Age:</b> {donor.age}</p>
        <p><b>Phone:</b> {donor.phone}</p>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(donor._id)}
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default DonorCard