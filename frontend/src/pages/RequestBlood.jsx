import { useState } from "react";

export default function BloodRequestForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    units: "",
    hospital: "",
    city: "",
    phone: "",
    urgency: "Normal",
    reason: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/request/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message || "Request submitted successfully!");

      setFormData({
        patientName: "",
        age: "",
        gender: "",
        bloodGroup: "",
        units: "",
        hospital: "",
        city: "",
        phone: "",
        urgency: "Normal",
        reason: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error submitting request");
    }
  };

  return (
    <div className="form-container">
      <h2>🩸 Blood Request Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="patientName"
          placeholder="Patient Name"
          onChange={handleChange}
          value={formData.patientName}
          required
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChange}
          value={formData.age}
          required
        />

        <select
          name="gender"
          onChange={handleChange}
          value={formData.gender}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select
          name="bloodGroup"
          onChange={handleChange}
          value={formData.bloodGroup}
          required
        >
          <option value="">Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <input
          name="units"
          placeholder="Units Needed"
          type="number"
          onChange={handleChange}
          value={formData.units}
        />

        <input
          name="hospital"
          placeholder="Hospital Name"
          onChange={handleChange}
          value={formData.hospital}
          required
        />

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          value={formData.city}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          value={formData.phone}
          required
        />

        <select
          name="urgency"
          onChange={handleChange}
          value={formData.urgency}
        >
          <option>Normal</option>
          <option>Urgent</option>
          <option>Emergency</option>
        </select>

        <textarea
          name="reason"
          placeholder="Reason"
          onChange={handleChange}
          value={formData.reason}
          required
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}