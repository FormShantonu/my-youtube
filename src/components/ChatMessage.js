import React from 'react'

const ChatMessage = ({ userName, message }) => {
  return (
    <div className="flex flex-row items-center mb-2 shadow-sm bg-gray-100 rounded-md p-2">
        <img
          className="h-8 w-8 rounded-full"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User Avatar"
        />
        <p className="font-bold px-2">{userName}</p>
        <p className="text-sm text-gray-600">{message}</p>
    </div>
  )
}

export default ChatMessage