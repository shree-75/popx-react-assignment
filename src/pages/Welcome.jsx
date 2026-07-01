import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";

function Welcome() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div
        className="page"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: "812px",
        }}
      >
        <div>
          <h1 className="title">Welcome to PopX</h1>

          <p className="subtitle">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <div style={{ marginTop: "30px" }}>
            <Button
              text="Create Account"
              onClick={() => navigate("/register")}
            />
          </div>

          <div style={{ marginTop: "12px" }}>
            <Button
              text="Already Registered? Login"
              type="secondary"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Welcome;