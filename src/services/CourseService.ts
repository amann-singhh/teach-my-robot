import axios from 'axios';

// TODO: Replace with real API URL
const API_BASE_URL = 'https://xdrowyxya4.execute-api.eu-north-1.amazonaws.com/main';

export interface Video {
    id: string;
    title: string;
    url: string;
    duration: string;
    isCompleted?: boolean;
}

export interface DriveResource {
    title: string;
    url: string;
    type: 'pdf' | 'doc' | 'link';
}

export interface Module {
    id: string;
    title: string;
    videos: Video[];
    resources?: DriveResource[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    progress: number;
    modules: Module[];
}

export const CourseService = {
    // Fetch all courses
    getAllCourses: async (): Promise<Course[]> => {
        try {
            const response = await axios.get(`${API_BASE_URL}/courses`);
            // If API returns wrapped structure, adjust here. 
            // Assuming direct array or { courses: [...] }
            return response.data;
        } catch (error) {
            console.error("Failed to fetch courses:", error);
            throw error;
        }
    },

    // Fetch single course by ID
    getCourseById: async (id: string): Promise<Course | null> => {
        try {
            // Changed to use query param ?id=... to avoid API Gateway proxy issues
            const response = await axios.get(`${API_BASE_URL}/courses`, {
                params: { id }
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to fetch course ${id}:`, error);
            return null;
        }
    }
};
