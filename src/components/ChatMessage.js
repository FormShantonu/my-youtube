import React from "react";

const ChatMessage = ({ userName, message }) => {
  return (
    <div className="flex items-start mb-2 p-2 bg-gray-50 rounded-md border border-gray-200">
      <img
        className="h-8 w-8 rounded-full flex-shrink-0 mr-2"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="User Avatar"
      />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-gray-800 truncate">
          {userName}
        </p>
        <p className="text-sm text-gray-600 break-words">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
