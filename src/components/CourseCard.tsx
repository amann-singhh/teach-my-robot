import React from 'react';
import { Course } from '../data/coursesData';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col h-full border border-gray-100 group transition-transform hover:-translate-y-1">
      <Link to={`/courses/${course.id}`} className="block rounded-xl overflow-hidden mb-3 h-40 flex items-center justify-center bg-gray-100 focus:outline-none">
        <img src={course.image} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
      </Link>
      <div className="flex-1 flex flex-col">
        <div className="text-xs font-semibold text-blue-600 mb-1">Grade {course.grade}</div>
        <Link to={`/courses/${course.id}`} className="font-bold text-lg mb-1 text-gray-900 hover:underline">
          {course.title}
        </Link>
        <div className="text-gray-700 text-sm mb-2 flex-1">{course.description}</div>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-base mr-1">★</span>
          <span className="font-semibold text-sm mr-2">{course.rating.toFixed(1)}</span>
          <span className="text-xs text-gray-500">({course.reviews})</span>
        </div>
        <div className="text-xs text-gray-500 mb-1">Instructor: <span className="font-medium text-gray-700">{course.instructor}</span></div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-orange-600">₹{course.price}</span>
          <Link to={`/courses/${course.id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded font-semibold text-sm transition-colors">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 