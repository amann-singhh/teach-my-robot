import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/coursesData';
import { ArrowLeft } from 'lucide-react';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <button onClick={() => navigate(-1)} className="btn btn-primary inline-flex items-center">
          <ArrowLeft size={18} className="mr-2" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link to="/courses" className="text-blue-600 hover:underline flex items-center mb-2">
          <ArrowLeft size={18} className="mr-1" /> Back to Courses
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="mr-4">Grade: <span className="font-medium text-blue-700">{course.grade}</span></span>
          <span className="mr-4">Instructor: <span className="font-medium text-gray-700">{course.instructor}</span></span>
          <span className="flex items-center mr-4 text-yellow-500">★ {course.rating.toFixed(1)} <span className="ml-1 text-gray-400">({course.reviews})</span></span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
          <img src={course.image} alt={course.title} className="object-cover w-full h-64" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Course Overview</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-orange-600 mb-2">₹{course.price}</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold text-lg transition-colors w-full md:w-auto">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage; 