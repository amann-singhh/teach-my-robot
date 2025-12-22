import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_BASE =
  "https://3vjxml05n1.execute-api.ap-south-1.amazonaws.com";

const ChapterDetailPage: React.FC = () => {
    const navigate = useNavigate();
  const { courseId, chapterName } = useParams<{
    courseId: string;
    chapterName: string;
  }>();

  const [videos, setVideos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!courseId || !chapterName) {
      setError("Invalid chapter");
      setLoading(false);
      return;
    }

    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/courses/${courseId}/chapters/${encodeURIComponent(
            chapterName
          )}/videos`
        );

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setVideos(data);
      } catch (err) {
        setError("Unable to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [courseId, chapterName]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">
        {decodeURIComponent(chapterName || "")}
      </h1>

      {loading && <p>Loading videos...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && videos.length === 0 && (
        <p>No videos found.</p>
      )}

      {!loading && !error && videos.length > 0 && (
        <ul className="space-y-3">
          {videos.map((video) => (
            <li
            key={video}
            onClick={() =>
                navigate(
                `/courses/${courseId}/chapters/${encodeURIComponent(
                    chapterName!
                )}/videos/${encodeURIComponent(video)}`
                )
            }
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
            🎬 {video}
            </li>

          ))}
        </ul>
      )}
    </div>
  );
};

export default ChapterDetailPage;
