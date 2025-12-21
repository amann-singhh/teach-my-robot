import React, { useState, useEffect } from 'react';
import { CourseService, Course } from '../services/CourseService';
import CourseCard from '../components/CourseCard';
import { Loader2 } from 'lucide-react';

const CoursePage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await CourseService.getAllCourses();
        setCourses(data);
      } catch (err) {
        console.error("Failed to load courses", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Explore Our Courses</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover various courses for all registered students.</p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="animate-spin text-blue-600" size={48} />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            )}
        </div>
    </div>
  );
};

export default CoursePage;