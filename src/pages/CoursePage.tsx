import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

const API_BASE =
  "https://3vjxml05n1.execute-api.ap-south-1.amazonaws.com";

/* API response shape */
type ApiCourse = {
  courseId: string;
  title: string;
  grade: string;
  description: string;
  thumbnailUrl: string;
};

/* UI shape */
type UiCourse = {
  id: string;
  title: string;
  image: string;
  price: number;
  instructor: string;
  grade: string;
  description: string;
  rating: number;
  reviews: number;
};

/* ---------- helpers to generate stable values ---------- */
const hashFromString = (str: string) =>
  str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

const getPrice = (id: string) => {
  const base = 999;
  return base + (hashFromString(id) % 5) * 500; // 999, 1499, 1999, etc.
};

const getRating = (id: string) => {
  const base = 4;
  return +(base + (hashFromString(id) % 10) * 0.05).toFixed(1); // 4.0 – 4.5
};

const getReviews = (id: string) =>
  80 + (hashFromString(id) % 200); // 80 – 280
/* ------------------------------------------------------ */

const CoursePage: React.FC = () => {
  const [courses, setCourses] = useState<UiCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await fetch(`${API_BASE}/courses`);
        if (!res.ok) throw new Error("Failed to fetch courses");

        const data: ApiCourse[] = await res.json();

        const transformed: UiCourse[] = data.map((course) => ({
          id: course.courseId,
          title: course.title,
          grade: course.grade,
          description: course.description,

          image: course.thumbnailUrl || "/images/default-course.png",

          price: getPrice(course.courseId),
          instructor: "Teach My Robot",
          rating: getRating(course.courseId),
          reviews: getReviews(course.courseId),
        }));

        setCourses(transformed);
      } catch (err) {
        console.error(err);
        setError("Unable to load courses");
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading courses...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600">{error}</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Online Courses for Grades 3–12
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
