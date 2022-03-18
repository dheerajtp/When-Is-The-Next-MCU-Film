import React from "react";
import empty from "../media/empty.gif";

function Empty() {
  return (
    <>
      <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center" onClick={()=>{
          window.location.reload();
      }}>
        <span>Back</span>
      </button>

      <img src={empty} alt="empty" />
    </>
  );
}

export default Empty;
