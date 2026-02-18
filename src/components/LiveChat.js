import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="w-full h-[350px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage userName="User1" message="This is a sample message 1." />
      <ChatMessage userName="User2" message="This is a sample message 2." />
      <ChatMessage userName="User3" message="This is a sample message 3.his is a sample message 3.his is a sample message 3.his is a sample message 3.his is a sample message 3.his is a sample message 3." />
    </div>
  );
};

export default LiveChat;
