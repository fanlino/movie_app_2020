import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state === null) {
    console.log("navigate");
    navigate("/");
  }

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
};

export default Detail;
