import React, { useState } from "react";
import { Input, Typography, message } from "antd";
import { AdminNavbar } from "../components/admin/AdminNavbar";
import { useHistory } from "react-router";

const { Title } = Typography;

export const LoginPage = () => {
  let history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const onsubmit = () => {
    if (username === "finoxen" && password === "finoxen@123") {
      localStorage.setItem("finoxen", "true");
      history.push("/admin/updates");
    } else {
      message.error("Username or Password is incorrect !");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100vw",
          height: "90vh",
          backgroundColor: "#eeeeee",
        }}
      >
        <Title level={2} style={{ color: "var(--secondary-color)" }}>
          Admin Login
        </Title>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Input
            placeholder="Username"
            size="large"
            style={{ width: "320px", margin: "1rem" }}
            value={username}
            onChange={(e) => setusername(e.target.value)}
          ></Input>

          <Input.Password
            placeholder="Password"
            size="large"
            style={{ width: "320px", margin: "1rem" }}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></Input.Password>

          <button
            className="button"
            style={{ margin: "1rem" }}
            onClick={onsubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
