import PropTypes from "prop-types";
import { Wrapper } from "./indicator.styled";
import React, { FC } from "react";
interface StyledHeaderProps {
  display: string;
  height: string;
  width: string;
  borderRadius: string;
  backgroundColor: string;
  margin: string;
  opacity: string;
  transitionDuration: string;
}

function Dot(props: any) {
  return (
    <span
      style={{
        display: "inline-block",
        height: "8px",
        width: "8px",
        borderRadius: "4px",
        backgroundColor: "#222",
        margin: "7px 5px 12px 5px",
        opacity: props.selected ? "1" : "0.3",
        transitionDuration: "300ms",
      }}
    />
  );
}

// export default function IndicatorDots(props: any) {

const IndicatorDots: FC<StyledHeaderProps> = (props: any) => {
  const wrapperStyle = {
    position: "absolute",
    width: "100%",
    zIndex: "100",
    bottom: "0px",
    textAlign: "center",
  };

  if (props.total < 2) {
    // Hide dots when there is only one dot.
    return <div />;
  } else {
    return (
      <div className="dots">
        {Array.apply(null, Array(props.total)).map((x, i) => {
          return <Dot key={i} selected={props.index === i} />;
        })}
      </div>
    );
  }
};
export default IndicatorDots;
