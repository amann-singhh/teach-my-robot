export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  grade: string;
  price: number;
  instructor: string;
  rating: number;
  reviews: number;
}

export const courses: Course[] = [
  {
    id: 'blockzie',
    title: 'Lets Explore Blockzie',
    description: 'Code with ease, create with confidence! Learn Blockzie block coding and turn ideas into interactive projects. Enroll now!',
    image: '/images/services/robotics-lab.jpg',
    grade: '3-5',
    price: 599,
    instructor: 'TeachMyRobot Team',
    rating: 5.0,
    reviews: 1,
  },
  {
    id: 'iot',
    title: 'Mastering the Internet of Things',
    description: 'Step into the future with IoT! Learn to build smart devices, automate systems, and innovate like a pro. Enroll now!',
    image: '/images/services/ai-smart-lab.jpg',
    grade: '6-8',
    price: 499,
    instructor: 'TeachMyRobot Team',
    rating: 5.0,
    reviews: 1,
  },
  {
    id: 'ar-link',
    title: 'Lets Learn AR Link Kit',
    description: 'Bring learning to life with the AR Link Kit! Explore interactive, hands-on experiences that blend the real and digital worlds. Enroll now!',
    image: '/images/services/interactive-panel.jpg',
    grade: '9-12',
    price: 99,
    instructor: 'TeachMyRobot Team',
    rating: 0.0,
    reviews: 0,
  },
]; 