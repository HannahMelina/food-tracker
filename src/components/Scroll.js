import React from "react";

export const Scroll = (props) => {
  return (
    <div>
      <div className="overflow-y-scroll h-[65vh]">{props.children}</div>
    </div>
  );
};
