import React from "react";
import "./CardComp.scss";
import logo from "../../images/FINOXEN STRATAGEM.png";
import { MdClose } from "react-icons/md";

export const CardComp = ({ onedata }) => {
  return (
    <div className="CardComp">
      <img className="card-icon" src={onedata.image} alt="logo" />
      <div className="title-CardComp">{onedata.name}</div>
      <div className="point-sec">
        {/* <ul>
          <li>First point</li>
          <li>Second point</li>
          <li>Third point</li>
          <li>Fourth point</li>
          <li>Fifth point</li>
        </ul> */}
        {onedata.about}
      </div>
      <button
        className="button"
        onClick={() => {
          var modal = document.getElementById(onedata.name);
          modal.style.display = "block";
        }}
      >
        READ MORE
      </button>

      <div id={onedata.name} className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{onedata.name}</h3>
            <span
              className="close"
              onClick={() => {
                var modal = document.getElementById(onedata.name);
                modal.style.display = "none";
              }}
            >
              <MdClose />
            </span>
          </div>
          <div className="modal-body">
            <img src={onedata.image} alt={onedata.name} />
            <ul>
              {onedata?.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </div>
          {/* <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};
