import { useState } from "react";

export default function DonorList() {
  // Dummy Donor Data (Without Firebase)
  const [donors] = useState([
    {
      id: 1,
      name: "Ali Khan",
      age: 26,
      gender: "Male",
      blood_group: "A+",
      phone: "0300-1234567",
      city: "Lahore"
    },
    {
      id: 2,
      name: "Ayesha",
      age: 22,
      gender: "Female",
      blood_group: "O-",
      phone: "0311-9876543",
      city: "Karachi"
    },
    {
      id: 3,
      name: "Usman",
      age: 30,
      gender: "Male",
      blood_group: "B+",
      phone: "0345-9988776",
      city: "Islamabad"
    }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Donor List</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {donors.map((donor) => (
          <div
            key={donor.id}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "#fff7f7",
            }}
          >
            <h3>{donor.name}</h3>
            <p><strong>Age:</strong> {donor.age}</p>
            <p><strong>Gender:</strong> {donor.gender}</p>
            <p>
              <strong>Blood Group:</strong>{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                {donor.blood_group}
              </span>
            </p>
            <p><strong>Phone:</strong> {donor.phone}</p>
            <p><strong>City:</strong> {donor.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}