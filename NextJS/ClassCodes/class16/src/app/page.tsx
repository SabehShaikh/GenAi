'use client'
import ChildOne from "@/components/ChildOne";
import { createContext } from "react";

const Data = createContext({firstName: ""})


export default function Home() {
  return (
  <div>
    <Data.Provider value={{firstName: "Sabeh"}}>

    <ChildOne  />
    </Data.Provider>
  </div>
  );
}

export {Data}
