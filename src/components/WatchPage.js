import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [liveChatId, setLiveChatId] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const dispatch = useDispatch();

  const videoId = searchParams.get("v");
  console.log(videoId);

  const fetchVideoDetails = async (videoId) => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_DETAILS_API(videoId));
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const video = data.items[0];
        setVideoData(video);

        // Check if the video has live streaming details and is currently live
        if (
          video.liveStreamingDetails &&
          video.liveStreamingDetails.activeLiveChatId
        ) {
          setLiveChatId(video.liveStreamingDetails.activeLiveChatId);
        } else {
          console.log("Video does not have active live chat");
          setLiveChatId(null);
        }
      }
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };
  useEffect(() => {
    dispatch(closeSidebar());

    // Fetch video details when videoId changes
    if (videoId) {
      fetchVideoDetails(videoId);
    }
  }, [videoId]);
  return (
    <div className="flex flex-col w-full">
      <div className="px-20 flex w-full">
        <div className="w-full">
          <iframe
            width="650"
            height="350"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat liveChatId={liveChatId} />
        </div>
      </div>
      {/* Comment container need to change- data coming from api and not hard coded */}
      <CommentContainer />
    </div>
  );
};
export default WatchPage;
