import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
  if (!form.name || !form.email || !form.phone || !form.password) {
    alert("Please fill all required fields.");
    return;
  }

  localStorage.setItem("user", JSON.stringify(form));

  navigate("/account");
};

  return (
    <Layout>
      <div className="page">
        <h1 className="title">
          Create your
          <br />
          PopX account
        </h1>

        <Input
          label="Full Name*"
          placeholder="Marry Doe"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <Input
          label="Phone number*"
          placeholder="9876543210"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <Input
          label="Email address*"
          placeholder="marry@example.com"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <Input
          label="Password*"
          type="password"
          placeholder="********"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <Input
          label="Company name"
          placeholder="PopX"
          value={form.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />

        <div className="radio-group">
          <p style={{ marginBottom: "10px", fontWeight: "600" }}>
            Are you an Agency?*
          </p>

          <label>
            <input
              type="radio"
              name="agency"
              checked={form.agency === "Yes"}
              onChange={() => handleChange("agency", "Yes")}
            />
            {" "}Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              checked={form.agency === "No"}
              onChange={() => handleChange("agency", "No")}
            />
            {" "}No
          </label>
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <Button
            text="Create Account"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Register;