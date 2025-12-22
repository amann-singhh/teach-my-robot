import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

/* API data shape */
type ApiCourse = {
  courseId: string;
  title: string;
  grade: string;
  description: string;
  status: string;
};

/* UI data shape (must match CourseCard expectations) */
type UiCourse = {
  id: string;
  title: string;
  image: string;
  price: number;        // ✅ number
  instructor: string;
  grade: string;
  description: string;
  rating: number;
  reviews: number;
};

const CoursePage: React.FC = () => {
  const [courses, setCourses] = useState<UiCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://3vjxml05n1.execute-api.ap-south-1.amazonaws.com//courses")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch courses");
        return res.json();
      })
      .then((data: ApiCourse[]) => {
        const transformedCourses: UiCourse[] = data
          // .filter(course => course.status === "active")
          .map(course => ({
            id: course.courseId,
            title: course.title,
            grade: course.grade,
            description: course.description,

            // ✅ UI-only fields
            image: "/images/default-course.png",
            price: 0, // ✅ NUMBER (NOT string)
            instructor: "Teach My Robot",
            rating: 4.5,
            reviews: 120,
          }));

        setCourses(transformedCourses);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load courses");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Online Courses for Grades 3–12
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
