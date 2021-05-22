import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spin } from "antd";
import "./ContactUsSec.scss";
import {
  MdPerson,
  MdMessage,
  MdPhone,
  MdMail,
  MdDateRange,
} from "react-icons/md";
import { db } from "../../config";

export const ContactUsSec = () => {
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    db.ref("responses").on("value", (res) => {
      let orgdata = Object.entries(res.val());
      setdata(orgdata.reverse());
      setisloading(false);
    });
  }, []);

  return (
    <div className="ContactUsSec">
      <div className="title">Get In Touch Responses</div>
      <div className="underline">
        <ul>
          <li style={{ width: 38 }}></li>
          <li style={{ width: 18 }}></li>
          <li style={{ width: 9 }}></li>
        </ul>
      </div>

      {isloading === true ? (
        <div className="loadingsec">
          <Spin size="large" />
        </div>
      ) : (
        <Row>
          <Col md={2}></Col>
          <Col md={20}>
            {data.map((e) => (
              <Card key={e[0]}>
                <Row>
                  <Col
                    span={24}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i>
                      <MdPerson className="contact-icon" />
                    </i>
                    <span>{e[1].name}</span>
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={24}
                    md={12}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i>
                      <MdMail className="contact-icon" />
                    </i>
                    <span>{e[1].email}</span>
                  </Col>
                  <Col
                    xs={24}
                    md={12}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i>
                      <MdPhone className="contact-icon" />
                    </i>
                    <span>{e[1].number}</span>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i>
                      <MdMessage className="contact-icon" />
                    </i>
                    <span>{e[1].message}</span>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i>
                      <MdDateRange className="contact-icon" />
                    </i>
                    <span className="date">{e[1].date.slice(0, 16)}</span>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col md={2}></Col>
        </Row>
      )}
    </div>
  );
};
