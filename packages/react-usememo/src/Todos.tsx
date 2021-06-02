import React, { useMemo, useState } from "react";

export default function Todos(props: { propA: string; propB: string }) {
  const [propA, restProps] = useMemo(() => {
    const { propA, ...restProps } = props;
    console.log("useMemo");
    return [propA, restProps];
  }, [props]);
  const [count, setCount] = useState(0);
  const forceUpdate = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      Todos: {count}
      <button onClick={forceUpdate}>update</button>
    </div>
  );
}
