// This file serves as a mock data source for news updates
// In a production environment, this would likely come from a CMS or API

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
  featured: boolean;
}

export const newsItems: NewsItem[] = [
  {
  id: '1',
  title: 'TeachMyRobot Launches First Morning Robotics Lab in Araria',
  slug: 'teachmyrobot-launches-morning-robotics-lab-araria',
  date: '2025-06-07',
  excerpt: 'Chief Minister Nitish Kumar inaugurates first morning robotics lab in Araria at Rajkiyakrit Ramanugrah Higher Secondary School, introducing global STEM education.',
  coverImage: 'https://drive.google.com/uc?export=view&id=1FKiw_n0qVmv8PyeOx3qBZ5ks8Xbxx4b5',
  content: `
    <h2>First-Ever Morning Robotics Lab Opens in Araria</h2>
    <p>TeachMyRobot proudly announces the launch of  first-ever morning robotics lab at Araria, marking a major step toward advanced education in rural Bihar. The lab was inaugurated by Honorable Chief Minister <strong>Nitish Kumar</strong> at <strong>Rajkiyakrit Ramanugrah Higher Secondary School, Hansa</strong>.</p>
    
    <h3>Advancing STEM Education</h3>
    <img src="https://drive.google.com/uc?export=view&id=11pEfcdrLqqcy6XMoaBCF9tjGPxngFvgT" alt="description" style="width:100%; max-width:600px; margin: 20px 0;" />

    <p>This initiative introduces global-level STEM learning with hands-on tools and curriculum. Students will now explore:</p>
    <ul>
      <li><strong>3D Printing:</strong> Creating physical prototypes of their ideas</li>
      <li><strong>Drone Technology:</strong> Understanding flight systems and navigation</li>
      <li><strong>Microcontrollers:</strong> Learning to build and program smart devices</li>
      <li><strong>Math Circle:</strong> Interactive problem-solving to build logical thinking</li>
    </ul>
    
    <h3>Global Techno-Curriculum</h3>
    <p>The program is inspired by advanced STEM modules used in <strong>Germany</strong> and the <strong>United States</strong>. It blends hands-on experimentation with real-world technology applications, aiming to foster creativity, critical thinking, and innovation among students.</p>
    
    <h2>Impact and Future Plans</h2>
    <p>This lab will serve as a hub for rural innovation, inspiring students to pursue careers in science and technology. TeachMyRobot plans to expand this model to more schools in North Bihar in the coming months.</p>
    
    <p>For further updates and registration details for upcoming workshops, visit our <a href="/labs#araria">Araria Labs page</a> or call (555) 987-6543.</p>
  `,
  featured: true,
},

  {
    id: '2',
    title: 'TeachMyRobot Partners with Local School District',
    slug: 'teachmyrobot-partners-with-local-school-district',
    date: '2025-04-10',
    excerpt: 'New partnership will bring robotics education to all 25 elementary schools in the district starting Fall 2025.',
    coverImage: 'https://images.pexels.com/photos/8566271/pexels-photo-8566271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>Expanding Access to STEM Education</h2>
      <p>TeachMyRobot is proud to announce a comprehensive partnership with Westview School District to bring robotics and coding education to all 25 elementary schools starting in the 2025-2026 academic year.</p>
      
      <p>This initiative will impact over 10,000 students, ensuring that every child in the district has access to high-quality STEM learning experiences regardless of their school's existing resources or location.</p>
      
      <h3>Program Components</h3>
      <ul>
        <li><strong>In-School Curriculum:</strong> Weekly robotics classes integrated into the regular school schedule</li>
        <li><strong>Teacher Training:</strong> Comprehensive professional development for 150+ teachers</li>
        <li><strong>Equipment Provision:</strong> Classroom sets of age-appropriate robotics kits for each school</li>
        <li><strong>Family Engagement:</strong> Evening and weekend events to involve parents in the learning process</li>
      </ul>
      
      <h3>Statement from the Superintendent</h3>
      <blockquote>
        "This partnership with TeachMyRobot represents a significant step forward in our district's commitment to preparing students for the jobs of the future. By introducing all students to robotics and coding at an early age, we're building critical thinking skills and opening doors to STEM careers."
        <cite>— Dr. Elizabeth Harmon, Superintendent of Westview School District</cite>
      </blockquote>
      
      <h3>Phased Implementation</h3>
      <p>The program will roll out in three phases:</p>
      <ol>
        <li><strong>Summer 2025:</strong> Teacher training and curriculum development</li>
        <li><strong>Fall 2025:</strong> Implementation in 10 pilot schools</li>
        <li><strong>Spring 2026:</strong> Expansion to all remaining schools</li>
      </ol>
      
      <h2>Community Impact</h2>
      <p>This partnership is made possible in part by a $250,000 grant from the Regional Technology Foundation, with additional support from local businesses. The initiative aligns with the district's strategic plan to increase STEM proficiency scores by 25% over the next three years.</p>
      
      <p>For more information about our school partnerships or to explore bringing TeachMyRobot programs to your school, visit our <a href="/services#school-programs">School Programs page</a>.</p>
    `,
    featured: true,
  },
  {
    id: '3',
    title: 'TeachMyRobot Team Wins National Robotics Education Award',
    slug: 'teachmyrobot-team-wins-national-robotics-education-award',
    date: '2025-03-25',
    excerpt: 'Our innovative approach to accessibility in robotics education recognized with prestigious national award.',
    coverImage: 'https://images.pexels.com/photos/8566576/pexels-photo-8566576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>Recognition for Inclusive STEM Education</h2>
      <p>The TeachMyRobot team is honored to receive the 2025 National Innovation in Robotics Education Award from the American Association for STEM Advancement. This prestigious recognition celebrates our work in making robotics education accessible to students with diverse learning needs and abilities.</p>
      
      <h3>Award-Winning Program</h3>
      <p>The award specifically recognizes our "Robots for All" initiative, which has successfully:</p>
      <ul>
        <li>Developed adaptive robotics kits for students with physical disabilities</li>
        <li>Created modified programming interfaces for neurodivergent learners</li>
        <li>Implemented a comprehensive curriculum that addresses multiple learning styles</li>
        <li>Trained educators on inclusive teaching methods for technology subjects</li>
      </ul>
      
      <h3>Impact Data</h3>
      <p>Since launching "Robots for All" in 2023, the program has:</p>
      <ul>
        <li>Served over 1,500 students with diverse learning needs</li>
        <li>Shown a 40% increase in STEM engagement among participating students</li>
        <li>Trained 250+ educators in inclusive robotics teaching methods</li>
        <li>Been implemented in 35 schools across 12 states</li>
      </ul>
      
      <h3>Statement from Our Director</h3>
      <blockquote>
        "This award belongs to our entire team and all the amazing educators and students who have helped shape our inclusive approach. We believe that robotics and coding should be accessible to every learner, regardless of ability or background. This recognition fuels our commitment to continuing this important work."
        <cite>— Maria Gonzalez, Director of Education, TeachMyRobot</cite>
      </blockquote>
      
      <h2>Looking Forward</h2>
      <p>With the support of the award's $50,000 grant, TeachMyRobot will expand the "Robots for All" program to reach more students nationwide. Plans include:</p>
      <ul>
        <li>Development of additional adaptive hardware solutions</li>
        <li>Free online resources for educators serving diverse learners</li>
        <li>Research partnership with three universities to measure long-term impact</li>
      </ul>
      
      <p>To learn more about our commitment to inclusive robotics education or to bring "Robots for All" to your school, visit our <a href="/services#inclusive-programs">Inclusive Programs page</a>.</p>
    `,
    featured: false,
  },
  {
    id: '4',
    title: 'New Online Learning Platform Launching Next Month',
    slug: 'new-online-learning-platform-launching-next-month',
    date: '2025-03-15',
    excerpt: 'TeachMyRobot to launch comprehensive online learning environment for students to continue robotics education at home.',
    coverImage: 'https://images.pexels.com/photos/7347144/pexels-photo-7347144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>Expanding Access Through Digital Learning</h2>
      <p>TeachMyRobot is excited to announce the May 15th launch of our new online learning platform, designed to extend robotics and coding education beyond the classroom. This comprehensive digital environment will allow students to continue their STEM learning journey from anywhere with an internet connection.</p>
      
      <h3>Platform Features</h3>
      <ul>
        <li><strong>Interactive Coding Lessons:</strong> Progressive modules for block-based and text-based programming</li>
        <li><strong>Virtual Robot Simulations:</strong> Practice programming concepts with realistic robot simulations</li>
        <li><strong>Project-Based Learning:</strong> Guided projects with real-world applications</li>
        <li><strong>Achievement System:</strong> Badges, certificates, and skill tracking to motivate learners</li>
        <li><strong>Live Instructor Sessions:</strong> Weekly live classes with our expert educators</li>
      </ul>
      
      <h3>Accessibility Features</h3>
      <p>The platform has been designed with inclusivity as a priority:</p>
      <ul>
        <li>WCAG 2.1 AA compliance for screen reader compatibility</li>
        <li>Customizable interface for different learning needs</li>
        <li>Multilingual support (English, Spanish, French, and Mandarin at launch)</li>
        <li>Low-bandwidth options for areas with limited internet access</li>
      </ul>
      
      <h2>Subscription Options</h2>
      <p>The platform will be available through three subscription tiers:</p>
      <ul>
        <li><strong>Basic:</strong> Access to foundational courses and simulations</li>
        <li><strong>Premium:</strong> Full course catalog, projects, and limited live sessions</li>
        <li><strong>Complete:</strong> All features including unlimited live sessions and personalized feedback</li>
      </ul>
      
      <p>As part of our commitment to equitable access, TeachMyRobot will provide free subscriptions to qualifying schools and families with financial need.</p>
      
      <h3>Beta Testing Results</h3>
      <p>During our three-month beta testing period with 500 students:</p>
      <ul>
        <li>92% of participants showed measurable improvement in coding skills</li>
        <li>89% of parents reported increased interest in STEM subjects</li>
        <li>95% of students rated the platform as "fun and engaging"</li>
      </ul>
      
      <h2>Early Access</h2>
      <p>Current TeachMyRobot students will receive early access starting May 1st. Join our <a href="/waitlist">waitlist</a> to be among the first to explore the platform when it launches publicly on May 15th, 2025.</p>
    `,
    featured: true,
  }
];

export const getRecentNewsItems = (count: number = 3): NewsItem[] => {
  return [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getFeaturedNewsItems = (count: number = 2): NewsItem[] => {
  return [...newsItems]
    .filter(item => item.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getNewsItemBySlug = (slug: string): NewsItem | undefined => {
  return newsItems.find(item => item.slug === slug);
};

export const getNewsItemById = (id: string): NewsItem | undefined => {
  return newsItems.find(item => item.id === id);
};