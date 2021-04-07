import axios from "axios";
import React, { useState } from "react";
import "./GetInTouch.scss";

export const GetInTouch = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [message, setmessage] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("number", number);
    data.append("message", message);

    axios({
      method: "post",
      url: `/`,
      //   headers: {
      //     Authorization: "Bearer " + token,
      //     "Content-Type": "application/json",
      //   },
      data: data,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err);
      });
  };

  return (
    <div className="GetInTouch">
      <div className="title">Get In Touch</div>
      <div className="underline">
        <ul>
          <li style={{ width: 38 }}></li>
          <li style={{ width: 18 }}></li>
          <li style={{ width: 9 }}></li>
        </ul>
      </div>
      <div className="about">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto,
        aliquam totam doloribus facere ex aliquid? Quod ratione error eum,
        molestias, deserunt voluptas doloribus at voluptatem laboriosam rerum
        aspernatur impedit.
      </div>
      <form onSubmit={onsubmit}>
        <div className="top-sec">
          <div className="left-sec">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>
          <div className="right-sec">
            <textarea
              type="text"
              placeholder="Message"
              maxLength="500"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
          </div>
        </div>
        <div className="button-sec">
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  );
};
