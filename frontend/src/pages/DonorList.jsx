// src/pages/DonorList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/donor");

      setDonors(res.data.donors);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredDonors = donors.filter(
    (donor) =>
      donor.name.toLowerCase().includes(search.toLowerCase()) ||
      donor.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
      donor.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="donor-container">
      <h1 className="title">Donor List</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, blood group, city..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Donor Cards */}
      <div className="donor-grid">
        {filteredDonors.map((donor) => (
          <div className="donor-card" key={donor._id}>
            <h2>{donor.name}</h2>

            <p>
              <strong>Blood Group:</strong> {donor.bloodGroup}
            </p>

            <p>
              <strong>City:</strong> {donor.city}
            </p>

            <p>
              <strong>Email:</strong> {donor.email}
            </p>

            <p>
              <strong>Phone:</strong> {donor.phone}
            </p>

            {/* Availability Status */}
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  donor.availability === "Available"
                    ? "available"
                    : "not-available"
                }
              >
                {donor.availability}
              </span>
            </p>

            {/* Last Donation */}
            <p>
              <strong>Last Donation:</strong>{" "}
              {donor.lastDonation || "Not Donated Yet"}
            </p>

            <button className="contact-btn">Contact Donor</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorList;