import React from "react";

const useCounter = ({ from, to, interval = 20 }) => {
  const [start, finish] = [from, to];
  const [countValue, setCountValue] = React.useState(
    start < finish ? start : finish
  );

  const startCounting = () => {
    let i;
    i = setInterval(() => {
      setCountValue(countValue => {
        if (countValue === finish) {
          clearInterval(i);
          return countValue;
        }
        if (from > to) {
          return countValue - 1;
        }
        if (to > from) {
          return countValue + 1;
        }
      });
    }, interval);
  };
  return [countValue, startCounting];
};

export default useCounter;
