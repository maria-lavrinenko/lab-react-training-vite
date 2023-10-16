import React from "react";
import "./IdCard.css";

function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  return (
    <>
      <div id="IdCard">
        <div id="idImg">
          <img src={picture} />
        </div>
        <div id="idInfo">
          <p>
            <span style={{ fontWeight: "bold" }}>First Name:</span> {firstName}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Last Name:</span> {lastName}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Gender:</span> {gender}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Height:</span> {height}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Birth:</span>{" "}
            {birth.toDateString()}
          </p>
        </div>
      </div>
    </>
  );
}

export default IdCard;
