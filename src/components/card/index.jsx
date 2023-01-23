import React from "react";
import "./style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.SentRobot.id}?set=set3size=120*120`}
      alt=""
    />
    <h2>{props.SentRobot.name}</h2>
    <p>{props.SentRobot.email}</p>
  </div>
);
