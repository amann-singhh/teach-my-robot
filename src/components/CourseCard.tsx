import React from 'react';
import { Course } from '../services/CourseService';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, PlayCircle } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col h-full border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/courses/${course.id}`} className="block relative h-48 overflow-hidden rounded-t-2xl">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-blue-800 uppercase tracking-wide">
            {course.level}
        </div>
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <Link to={`/courses/${course.id}`} className="font-bold text-lg mb-2 text-gray-900 hover:text-blue-600 transition-colors line-clamp-1">
          {course.title}
        </Link>
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 mt-auto">
            <div className="flex items-center gap-1">
                <Clock size={14} className="text-blue-500" />
                {course.duration}
            </div>
            <div className="flex items-center gap-1">
                <BookOpen size={14} className="text-purple-500" />
                {course.modules?.length || 0} Modules
            </div>
        </div>

        <div className="pt-4 border-t border-gray-100 mt-2">
            <Link to={`/courses/${course.id}`} className="w-full block text-center bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 py-2 rounded-lg font-semibold text-sm transition-colors">
                View Details
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;