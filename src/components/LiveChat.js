import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <>
    <div className="w-full h-[350px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage userName="User1" message="This is a sample message 1." />
      <ChatMessage userName="User2" message="This is a sample message 2." />
      <ChatMessage userName="User3" message="This is a sample message 3.his is a sample message 3.his is a sample message 3.his is a sample message 3.his is a sample message 3.his is a sample message 3." />
    </div>
    <div className="border border-gray-400 ml-2 p-2 w-full rounded-lg flex flex-row">
      <input type="text" className='w-full mt-2 ml-2 p-2 rounded-lg' placeholder='Add a comment...' />
      <button className='bg-green-500 text-white px-4 py-2 rounded-lg mt-2 ml-2'>Send</button>
    </div>
    </>
  );
};

export default LiveChat;
