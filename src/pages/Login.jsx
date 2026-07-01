import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  const user = {
    name: "User",
    email: email,
  };

  localStorage.setItem("user", JSON.stringify(user));

  navigate("/account");
};

  return (
    <Layout>
      <div className="page">
        <h1 className="title">
          Signin to your
          <br />
          PopX account
        </h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <Input
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    

        <div style={{ marginTop: "25px" }}>
          <Button
  text="Login"
  type={email && password ? "primary" : "secondary"}
  onClick={handleLogin}
/>
        </div>
      </div>
    </Layout>
  );
}

export default Login;