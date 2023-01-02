import { memo } from "react";
import React from "react";

function Content({ onIncrease }) {
  console.log("re-render");

  return (
    <React.Fragment>
      <h1>Hello anh em</h1>
      <button onClick={onIncrease}>Click me</button>
    </React.Fragment>
  );
}
export default memo(Content);

//Nếu đi qua React thì sẽ viết như này
// export default React.memo(Content)
