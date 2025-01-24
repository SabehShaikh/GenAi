import React, { useContext } from "react";
import { Data } from "../app/page";


const ChildThree = () => {
    const user = useContext(Data)
    return (
    <div>
      <h1>{user.firstName}</h1>
    </div>
  );
};

export default ChildThree;
