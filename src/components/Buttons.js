import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = ({ name }) => {
  const navigate = useNavigate();

  const handelButtonURL = (name) => {
    if (name === "Live") {
      
      navigate("/live");
    }
  };

  return (
    <div>
      <button
        onClick={() => handelButtonURL(name)}
        className="p-2 m-2 bg-gray-200 rounded-lg"
      >
        {name}
      </button>
    </div>
  );
};

export default Buttons;
