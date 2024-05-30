import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

function  Sidebar(){
  return (
    <div className="flex ">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;