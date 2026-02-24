import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  setNextPageToken,
  setLiveChatId,
  setLoading,
  setError,
  clearChat,
} from "../utils/chatSlice";
import { buildLiveChatAPI } from "../utils/constants";

const LiveChat = ({ liveChatId }) => {
  const dispatch = useDispatch();

  const {
    message: chatMessages,
    nextPageToken,
    isLoading,
    error,
  } = useSelector((store) => store.chat);

  const getLatestMessages = async () => {
    if (!liveChatId) {
      dispatch(setError("No live chat ID provided"));
      return;
    }

    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const apiUrl = buildLiveChatAPI(liveChatId, nextPageToken);
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        // Process the actual chat messages from the API
        if (data.items && data.items.length > 0) {
          data.items.forEach((item) => {
            dispatch(
              addMessage({
                userName: item.authorDetails?.displayName || "Anonymous",
                message: item.snippet?.textMessageDetails?.messageText || "",
                profileImageUrl: item.authorDetails?.profileImageUrl,
              }),
            );
          });
        }

        // Update the next page token for pagination
        if (data.nextPageToken) {
          dispatch(setNextPageToken(data.nextPageToken));
        }
      } else {
        // Handle API errors
        if (data.error) {
          console.error("YouTube API Error:", data.error);
          dispatch(setError(data.error.message || "API Error"));

          // If page token is invalid, reset it and try again
          if (data.error.reason === "pageTokenInvalid") {
            console.log("Page token invalid, resetting...");
            dispatch(setNextPageToken(null));
            // Clear the error and retry without page token
            setTimeout(() => {
              dispatch(setError(null));
              getLatestMessages();
            }, 1000);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      dispatch(setError("Failed to fetch chat messages"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    let interval = null;
    
    if (liveChatId) {
      dispatch(setLiveChatId(liveChatId));
      dispatch(clearChat()); // Clear previous chat when switching

      // Initial load
      getLatestMessages();

      // Set up polling interval
      interval = setInterval(() => {
        getLatestMessages();
      }, 2000); // Increased to 2 seconds to avoid rate limiting
    }

    // Always return cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [liveChatId]);

  return (
    <>
      <div className="w-full h-[350px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto">
        {error && (
          <div className="text-red-500 text-sm mb-2 p-2 bg-red-100 rounded">
            Error: {error}
          </div>
        )}
        {isLoading && (
          <div className="text-blue-500 text-sm mb-2">
            Loading chat messages...
          </div>
        )}
        {!liveChatId ? (
          <div className="text-gray-500 text-center mt-4">
            Select a live video to view chat
          </div>
        ) : (
          <>
            {chatMessages.length === 0 && !isLoading && (
              <div className="text-gray-500 text-center mt-4">
                No chat messages yet...
              </div>
            )}
            {chatMessages.map((chatMessage, index) => (
              <ChatMessage
                key={index}
                userName={chatMessage.userName}
                message={chatMessage.message}
              />
            ))}
          </>
        )}
      </div>
      <div className="border border-gray-400 ml-2 p-2 w-full rounded-lg flex flex-row">
        <input
          type="text"
          className="w-full mt-2 ml-2 p-2 rounded-lg"
          placeholder="Add a comment..."
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 ml-2">
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
