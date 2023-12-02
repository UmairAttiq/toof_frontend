import React from "react";

const Container = (props) => {
  return (
    <div
      className={`p-10 pb-0 mx-auto  ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;