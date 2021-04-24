import React, { useState } from "react";
import { db } from "../config";
import "./GetInTouch.scss";

export const GetInTouch = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  // useEffect(() => {
  //   db.ref("responses").on("value", (res) => {
  //     console.log(res.val());
  //   });
  // }, []);

  const onInputChange = (type, value) => {
    let newData = { ...data };
    newData[type] = value;
    setdata(newData);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    let payload = { ...data, date: new Date().toString() };
    db.ref("responses")
      .push()
      .set(payload)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const { name, email, number, message } = data;

  return (
    <div className="GetInTouch" id="contactus">
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
              onChange={(e) => onInputChange("name", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => onInputChange("email", e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone number"
              value={number}
              onChange={(e) => onInputChange("number", e.target.value)}
            />
          </div>
          <div className="right-sec">
            <textarea
              type="text"
              placeholder="Message"
              maxLength="500"
              value={message}
              onChange={(e) => onInputChange("message", e.target.value)}
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
