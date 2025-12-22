import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_BASE =
  "https://3vjxml05n1.execute-api.ap-south-1.amazonaws.com";

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const [chapters, setChapters] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  console.log("CourseDetailPage rendered. courseId =", courseId);

  useEffect(() => {
    const fetchChapters = async () => {
      if (!courseId) {
        setError("Invalid course");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching chapters for:", courseId);

        const res = await fetch(
          `${API_BASE}/courses/${courseId}/chapters`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch chapters");
        }

        const data: string[] = await res.json();
        setChapters(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load chapters");
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, [courseId]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Course Content
      </h1>

      {loading && <p>Loading chapters...</p>}

      {!loading && error && (
        <p className="text-red-600">{error}</p>
      )}

      {!loading && !error && chapters.length === 0 && (
        <p>No chapters found.</p>
      )}

      {!loading && !error && chapters.length > 0 && (
        <ul className="space-y-3">
          {chapters.map((chapter) => (
            <li
              key={chapter}
              onClick={() =>
                navigate(
                  `/courses/${courseId}/chapters/${encodeURIComponent(
                    chapter
                  )}`
                )
              }
              className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              {chapter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseDetailPage;
