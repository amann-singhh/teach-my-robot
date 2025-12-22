import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE =
  "https://3vjxml05n1.execute-api.ap-south-1.amazonaws.com";

const VideoPlayerPage: React.FC = () => {
  const { courseId, chapterName, videoName } = useParams<{
    courseId: string;
    chapterName: string;
    videoName: string;
  }>();

  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!courseId || !chapterName || !videoName) {
      setError("Invalid video");
      setLoading(false);
      return;
    }

    const fetchVideo = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/courses/${courseId}/chapters/${encodeURIComponent(
            chapterName
          )}/videos/${encodeURIComponent(videoName)}`
        );

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setVideoUrl(data.url);
      } catch {
        setError("Unable to load video");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [courseId, chapterName, videoName]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-xl font-bold mb-4">
        {decodeURIComponent(videoName || "")}
      </h1>

      {loading && <p>Loading video...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && videoUrl && (
        <video
          controls
          controlsList="nodownload"
          className="w-full rounded-lg shadow"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayerPage;
