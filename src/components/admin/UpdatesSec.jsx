import { Input, Select, message, Spin, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { db } from "../../config";
import "./UpdatesSec.scss";

export const UpdatesSec = () => {
  const { Option } = Select;

  const defaultData = {
    type: "IT",
    name: "",
    period: "",
    rule: "",
    original: "",
    extended: "",
    circular: "",
  };
  const [data, setdata] = useState(defaultData);
  const [response, setResponse] = useState([]);
  const [isloading, setisloading] = useState(false);

  const [rerender, setrerender] = useState(false);

  const { type, name, period, rule, original, extended, circular } = data;

  useEffect(() => {
    setisloading(true);
    db.ref("updates").once("value", (res) => {
      if (res.val() !== undefined && res.val() !== null) {
        let orgdata = Object.entries(res?.val());
        setResponse(orgdata?.reverse());
        // console.log(orgdata?.reverse());
        setisloading(false);
      } else {
        setResponse([]);
        setisloading(false);
        message.warning("No News & updates found !");
      }
    });
  }, [rerender]);

  const onInputChange = (type, value) => {
    let newData = { ...data };
    newData[type] = value;
    setdata(newData);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (data.type !== "" && data.name !== "") {
      setisloading(true);
      let payload = { ...data, date: new Date().toString() };
      db.ref("updates")
        .push()
        .set(payload)
        .then(() => {
          setisloading(false);
          message.success("New update has been successfully recorded");
          setdata(defaultData);
          setrerender(!rerender);
        })
        .catch((err) => {
          message.error("An error occured !");
          console.log(err);
        });
    } else {
      message.warning("Please fill all the fields");
    }
  };

  function confirm(item) {
    console.log(item);
    db.ref("updates")
      .child(item[0])
      .remove()
      .then((res) => {
        console.log(res);
        setrerender(!rerender);

        message.success("Update deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cancel(e) {
    console.log(e);
  }

  return (
    <div className="UpdatesSec">
      <form onSubmit={onsubmit}>
        <div className="title">
          <h1>Create News & Updates</h1>
        </div>
        <div className="top-sec">
          <Select
            className="inputs"
            value={type}
            onChange={(value) => onInputChange("type", value)}
          >
            <Option value="IT">IT</Option>
            <Option value="TAX">TAX</Option>
          </Select>
          <Input
            className="inputs"
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => onInputChange("name", e.target.value)}
          />
          {type === "IT" ? (
            <>
              <Input
                className="inputs"
                required
                type="text"
                placeholder="Period"
                value={period}
                onChange={(e) => onInputChange("period", e.target.value)}
              />
              <Input
                className="inputs"
                required
                type="text"
                placeholder="Rule"
                value={rule}
                onChange={(e) => onInputChange("rule", e.target.value)}
              />
              <Input
                className="inputs"
                required
                type="text"
                placeholder="Original date"
                value={original}
                onChange={(e) => onInputChange("original", e.target.value)}
              />
              <Input
                className="inputs"
                required
                type="text"
                placeholder="Extended date"
                value={extended}
                onChange={(e) => onInputChange("extended", e.target.value)}
              />
            </>
          ) : (
            <Input
              className="inputs"
              required
              type="text"
              placeholder="Circular"
              value={circular}
              onChange={(e) => onInputChange("circular", e.target.value)}
            />
          )}
        </div>

        <div className="button-sec">
          <button type="submit">{isloading ? "ADDING" : "ADD"}</button>
        </div>
      </form>

      <div className="title">
        <h1>Current News & Updates</h1>
      </div>

      <div className="update-section">
        {isloading === true ? (
          <div className="loadingsec">
            <Spin size="large" />
          </div>
        ) : (
          response?.map((item) => (
            <div key={item[0]}>
              {item[1]?.type === "IT" ? (
                <div className="it-sec">
                  <div className="left">
                    <h3>Type: {item[1]?.type}</h3>
                    <h3>Name: {item[1]?.name}</h3>
                    <p>Period covered: {item[1]?.period}</p>
                    <p>Rule/Section: {item[1]?.rule}</p>
                    <p>Original Date: {item[1]?.original}</p>
                    <p>Extended Date: {item[1]?.extended}</p>
                  </div>
                  <div className="right">
                    <Popconfirm
                      title="Are you sure to delete this ?"
                      onConfirm={() => confirm(item)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <MdDelete className="del-icon" />
                    </Popconfirm>
                  </div>
                </div>
              ) : item[1]?.type === "TAX" ? (
                <div className="it-sec">
                  <div className="left">
                    <h3>Type: {item[1]?.type}</h3>
                    <h3>Name: {item[1]?.name}</h3>
                    <p>Circular: {item[1]?.circular}</p>
                  </div>
                  <div className="right">
                    <Popconfirm
                      title="Are you sure to delete this ?"
                      onConfirm={() => confirm(item)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <MdDelete className="del-icon" />
                    </Popconfirm>
                  </div>
                </div>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
