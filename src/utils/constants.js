export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SUGGETIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Live streaming videos API - searches for currently live streams
export const LIVE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&order=date&maxResults=20&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

// Alternative API for live content - gets recent videos with "live" in title as fallback
export const LIVE_CONTENT_FALLBACK_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&order=date&q=live&maxResults=20&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

// Gaming/Music live streams (often have more active streams)
export const GAMING_LIVE_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&q=gaming&order=date&maxResults=20&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

// API to get video details by video ID (to fetch liveChatId)
export const YOUTUBE_VIDEO_DETAILS_API = (videoId) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

// Base URL for live chat messages - liveChatId and pageToken will be added dynamically
export const LIVE_CHAT_MESSAGES_API_BASE =
  "https://youtube.googleapis.com/youtube/v3/liveChat/messages?part=snippet,authorDetails&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

// Helper function to build live chat API URL
export const buildLiveChatAPI = (liveChatId, pageToken = null) => {
  let url = `${LIVE_CHAT_MESSAGES_API_BASE}&liveChatId=${liveChatId}`;
  if (pageToken) {
    url += `&pageToken=${pageToken}`;
  }
  return url;
};
