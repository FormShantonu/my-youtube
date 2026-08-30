import React, { useEffect, useRef, useState } from "react";
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
  const chatContainerRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const {
    message: chatMessages,
    nextPageToken,
    isLoading,
    error,
  } = useSelector((store) => store.chat);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  // Check if user is near bottom of chat
  const isNearBottom = () => {
    if (!chatContainerRef.current) return false;
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    return scrollHeight - scrollTop - clientHeight < 50; // 50px threshold
  };

  // Handle scroll events
  const handleScroll = () => {
    if (!chatContainerRef.current) return;

    const isAtBottom = isNearBottom();
    setIsUserScrolling(!isAtBottom);
    setShowScrollButton(!isAtBottom);
  };

  // Auto-scroll effect for new messages
  useEffect(() => {
    if (!isUserScrolling && chatMessages.length > 0) {
      scrollToBottom();
    }
  }, [chatMessages.length, isUserScrolling]);

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
      console.log("Fetched chat messages:", data);
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
      <div className="w-full h-[500px] border border-gray-300 bg-white rounded-lg shadow-lg flex flex-col">
        <div className="text-lg font-semibold p-3 text-gray-800 border-b bg-gray-50 rounded-t-lg">
          💬 Live Chat
        </div>
        <div
          ref={chatContainerRef}
          className="flex-1 p-3 overflow-y-auto overflow-x-hidden chat-scrollbar relative"
          onScroll={handleScroll}
        >
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
              <div className="space-y-2">
                {chatMessages.map((chatMessage, index) => (
                  <ChatMessage
                    key={index}
                    userName={chatMessage.userName}
                    message={chatMessage.message}
                  />
                ))}
              </div>
            </>
          )}
          {/* Scroll to bottom button */}
          {showScrollButton && (
            <button
              onClick={() => {
                scrollToBottom();
                setIsUserScrolling(false);
                setShowScrollButton(false);
              }}
              className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <form className="border border-gray-300 p-3 w-full rounded-lg flex flex-row gap-2 mt-2 bg-white shadow-sm"
      onSubmit={(e)=>{
        e.preventDefault();
        console.log("Send message functionality not implemented yet", inputMessage);
        dispatch(addMessage({ userName: "You", message: inputMessage }))
      }}
      >
        <input
          type="text"
          className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Add a comment..."
          value={inputMessage}
          onChange={(e)=>{
            setInputMessage(e.target.value)
            
          }}
        />
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
