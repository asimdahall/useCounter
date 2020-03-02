import React from "react";
import useCounter from "../hooks/useCounter";

export default () => {
  const [countValue, startCounting] = useCounter({
    from: 20,
    to: 1000,
    interval: 1
  });

  return (
    <>
      <h1>{countValue}</h1>
      <button onClick={startCounting}> CLICK ME</button>
    </>
  );
};
