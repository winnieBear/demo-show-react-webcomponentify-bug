import React, {useState, useEffect, useRef} from "react";

export const Counter = props => {
  const [count, setCount] = useState(0)
  const timer = useRef(null)
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount(oldCnt => {
        console.log(oldCnt + 1)
        return oldCnt + 1;
      })
    }, 1000)

    return () => {
      clearInterval(timer.current)
    }
  })

  const handleClick = () => {
    if (typeof props.onClick === 'function') {
      props.onClick();
      clearInterval(timer.current)
    }
  }

  return (
    <>
      <p>{count}</p>
      <button
        onClick={handleClick}
      >{props.text || "Stop Counter"}
        </button>
  </>
  );
};

