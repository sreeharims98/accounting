import React, { useState } from "react";
import { db } from "../config";
import "./GetInTouch.scss";
import { Input, message as msg } from "antd";

const defaultData = {
  name: "",
  email: "",
  number: "",
  message: "",
};

export const GetInTouch = () => {
  const [data, setdata] = useState(defaultData);
  const [isloading, setisloading] = useState(false);

  const onInputChange = (type, value) => {
    let newData = { ...data };
    newData[type] = value;
    setdata(newData);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (
      data.email !== "" &&
      data.name !== "" &&
      data.phone !== "" &&
      data.message !== ""
    ) {
      setisloading(true);
      let payload = { ...data, date: new Date().toString() };
      db.ref("responses")
        .push()
        .set(payload)
        .then(() => {
          setisloading(false);
          msg.success("Your response has been successfully recorded");
          setdata(defaultData);
        })
        .catch((err) => {
          msg.error("An error occured !");
          console.log(err);
        });
    } else {
      msg.warning("Please fill all the fields");
    }
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
        Whether you have a question about services, pricing, or anything else,
        Our team is ready to answer all your questions.
      </div>
      <form onSubmit={onsubmit}>
        <div className="top-sec">
          <div className="left-sec">
            <Input
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => onInputChange("name", e.target.value)}
            />
            <Input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => onInputChange("email", e.target.value)}
            />
            <Input
              required
              type="number"
              placeholder="Phone number"
              value={number}
              onChange={(e) => onInputChange("number", e.target.value)}
            />
          </div>
          <div className="right-sec">
            <Input.TextArea
              required
              type="text"
              placeholder="Message"
              maxLength="500"
              value={message}
              onChange={(e) => onInputChange("message", e.target.value)}
            />
          </div>
        </div>
        <div className="button-sec">
          <button type="submit">{isloading ? "SENDING" : "SEND"}</button>
        </div>
      </form>
    </div>
  );
};
