import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="heading_style">Favourite Online Series </h1>
    {Sdata.map(function ncard(val) {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          links={val.links}
        />
      );

    })}
  </>,
  document.getElementById("root")); 