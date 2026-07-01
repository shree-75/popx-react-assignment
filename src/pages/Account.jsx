import Layout from "../components/Layout";

function Account() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Layout>
      <div>
        <div
          style={{
            padding: "22px",
            borderBottom: "1px solid #eee",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Account Settings
        </div>

        <div className="page">

          <div className="profile">

            <div style={{ position: "relative" }}>

              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="profile"
              />

              <div
                style={{
                  position: "absolute",
                  right: "-2px",
                  bottom: "0",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "#6C25FF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                📷
              </div>

            </div>

            <div className="profile-info">
              <h3>{user?.name || "Guest User"}</h3>
              <p>{user?.email || "guest@example.com"}</p>
            </div>

          </div>

          <p className="desc">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam.
          </p>

          <div className="divider"></div>

        </div>
      </div>
    </Layout>
  );
}

export default Account;