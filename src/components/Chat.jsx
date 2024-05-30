import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <span className="font-semibold">{data.user?.displayName}</span>
        <div className="flex space-x-4">
          <img src={Cam} alt="Camera" className="w-6 h-6 cursor-pointer" />
          <img src={Add} alt="Add" className="w-6 h-6 cursor-pointer" />
          <img src={More} alt="More" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>
      <div className="p-4">
        <Input />
      </div>
    </div>
  );
};

export default Chat;
