import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`flex flex-col mb-4 ${message.senderId === currentUser.uid ? "items-end" : "items-start"}`}
    >
      <div className="flex items-center mb-2">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-8 h-8 rounded-full object-cover mr-2"
        />
        <span className="text-gray-500 text-xs">just now</span>
      </div>
      <div className={`flex flex-col space-y-2 ${message.senderId === currentUser.uid ? "items-end" : "items-start"}`}>
        <p className={`p-2 rounded-lg max-w-xs ${message.senderId === currentUser.uid ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
          {message.text}
        </p>
        {message.img && (
          <img
            src={message.img}
            alt=""
            className="w-64 h-64 object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Message;
