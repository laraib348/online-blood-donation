import { useState } from "react";

export default function RequestBlood() {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    age: "",
    hospital: "",
    city: "",
    phone: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/request/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);

        setFormData({
          patientName: "",
          bloodGroup: "",
          age: "",
          hospital: "",
          city: "",
          phone: "",
          reason: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Request Blood</h1>

      {submitted && (
        <div
          style={{
            background: "#d4ffd4",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "20px",
            textAlign: "center",
            color: "green",
          }}
        >
          Blood request submitted successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <input
          type="number"
          name="age"
          placeholder="Patient Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="hospital"
          placeholder="Hospital Name"
          value={formData.hospital}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="reason"
          placeholder="Reason for blood need"
          rows="4"
          value={formData.reason}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          style={{
            background: "red",
            color: "white",
            padding: "12px",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}