import React from "react";
import { RingLoader } from "react-spinners";
import { LoadingWrap } from "./styledCom";

const Loading = () => {
  return (
    <LoadingWrap>
      <div
        style={{
          backgroundColor: "black",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <RingLoader color="#CDE000" speedMultiplier={2} size={100} />
      </div>
    </LoadingWrap>
  );
};

export default Loading;
