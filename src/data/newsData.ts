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
  coverImage: '/images/news/n1cover.jpeg',
  content: `
    <h2>First-Ever Morning Robotics Lab Opens in Araria</h2>
    <p>TeachMyRobot proudly announces the launch of  first-ever morning robotics lab at Araria, marking a major step toward advanced education in rural Bihar. The lab was inaugurated by Honorable Chief Minister <strong>Nitish Kumar</strong> at <strong>Rajkiyakrit Ramanugrah Higher Secondary School, Hansa</strong>.</p>
    
    <h3>Advancing STEM Education</h3>
    <img src="/images/news/n1desc.jpeg" alt="description" style="width:100%; max-width:600px; margin: 20px 0;" />

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
    
    <p>For further updates and registration details for upcoming workshops, visit our <a href="/labs#araria">Araria Labs page</a> or call +91 9772101792.</p>
  `,
  featured: true,
},

  {
    id: '2',
    title: 'TeachMyRobot Partners with Local School District',
    slug: 'teachmyrobot-partners-with-local-school-district',
    date: '2025-04-10',
    excerpt: 'New partnership will bring robotics education to all 25 elementary schools in the district starting Fall 2025.',
    coverImage: '/images/news/WV2021.heic',
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
  },
  {
     id: '5',
  title: 'AI & Robotics Labs Transforming Government Schools under PM SHRI Mission',
  slug: 'ai-robotics-labs-transforming-govt-schools-pmshri',
  date: '2025-06-13',
  excerpt: 'Empowering students with hands-on AI and Robotics learning, this initiative brings cutting-edge technology to PM SHRI schools, aligned with NEP 2020 vision.',
  coverImage: '/images/news/n5.png',
  content: `
    <h2>AI & Robotics Labs Transforming Government Education</h2>
    <p>In a transformative step aligned with the PM SHRI initiative and National Education Policy 2020, our organization is setting up AI and Robotics labs across select government schools. The goal is to equip students with critical 21st-century skills by providing early exposure to cutting-edge technologies.</p>
    
    <h3>Why It Matters</h3>
    <p>This program introduces school children—especially from rural and under-resourced regions—to real-world applications of AI, coding, and robotics. By promoting problem-solving, creativity, and innovation, it lays the foundation for future careers in science and technology.</p>

    <h3>What We're Doing</h3>
    <ul>
      <li>Establishing fully-equipped robotics and AI labs in PM SHRI model schools</li>
      <li>Creating multilingual STEM media content for visual and interactive learning</li>
      <li>Training teachers on hands-on modules and future-ready teaching practices</li>
      <li>Introducing students to real-life projects like line follower robots and sensor-based systems</li>
    </ul>

    <h3>National Vision Alignment</h3>
    <p>The initiative supports the key pillars of NEP 2020, Atal Innovation Mission, and the broader Digital India campaign. It brings STEM opportunities to students who otherwise lack access to such modern educational infrastructure.</p>

    <h3>Student Response</h3>
    <p>Early student engagement has been overwhelmingly positive, with learners showing increased curiosity, confidence, and enthusiasm toward science and technology. Schools have reported higher classroom participation and hands-on learning outcomes.</p>

    <h2>Looking Ahead</h2>
    <p>The program is currently expanding across more districts, with a strong focus on sustainability and long-term community impact. More workshops, labs, and content rollouts are planned in the upcoming academic sessions.</p>

    <p>For updates, school participation inquiries, or volunteering opportunities, visit our <a href="">PM SHRI Labs page</a>.</p>
  `,
  featured: false,
  },
  {
    id: '6',
    title: 'Empowering Future Innovators: TeachMyRobot Partners with GD Goenka International School, Ahmedabad',
    slug: 'teachmyrobot-gdgoenka-stem-robotics',
    date: '2025-01-23',
    excerpt: 'A landmark collaboration bringing hands-on STEM, AI, and robotics education to students at GD Goenka International School, Ahmedabad—shaping future innovators.',
    coverImage: '/images/news/news_id06.jpg',
    content: `
      <h2>Empowering Future Innovators</h2>
      <p>We are thrilled to announce a landmark collaboration between TeachMyRobot and GD Goenka International School, Ahmedabad, aimed at transforming the educational landscape through the integration of STEM (Science, Technology, Engineering, Mathematics) and Robotics-based learning.</p>
      
      <h3>Bridging Education and Innovation</h3>
      <p>This partnership marks a major step toward providing students with hands-on access to emerging technologies such as drone systems, robotics, IoT, and AI fundamentals. Our mission is to bridge the gap between classroom learning and real-world applications — fostering innovation, problem-solving, and technical skills from an early age.</p>

      
      <h3>Program Highlights</h3>
      <ul>
        <li>Building and programming autonomous robots</li>
        <li>Simulating and flying real-time drones</li>
        <li>Understanding aerodynamics, sensors, and automation</li>
        <li>Participating in group challenges, tech expos, and hackathons</li>
        <li>Exploring 3D printing and electronic prototyping</li>
      </ul>
  
      <h3>Curriculum and Learning</h3>
      <p>Our NEP 2020-aligned curriculum emphasizes experiential learning and 21st-century skill development. The program is led by industry professionals and certified educators, bringing both expertise and mentorship to the classroom.</p>
  
      <h3>Vision and Goals</h3>
      <ul>
        <li>Nurture creativity and innovation</li>
        <li>Enhance logical reasoning and analytical thinking</li>
        <li>Spark interest in engineering, aerospace, and coding</li>
        <li>Build student portfolios through project-based learning</li>
        <li>Offer exposure to national-level STEM competitions</li>
      </ul>
  
      <h3>Advanced Learning Environment</h3>
      <p>The school’s on-site lab is equipped with advanced learning kits, drone stations, and programming consoles, creating a dynamic space for students to experiment and explore.</p>
  
      <p>“This program will unlock new possibilities for our students and help them evolve into confident, tech-savvy problem solvers,” said a representative from the school.</p>
  
      <h2>A Step Toward a Tech-Driven Future</h2>
      <p>With this partnership, GD Goenka International School joins TeachMyRobot’s growing network of progressive institutions dedicated to future-ready education.</p>
      
      <p>At TeachMyRobot, we believe that every child deserves the opportunity to create, innovate, and lead in tomorrow’s tech-driven world — and this collaboration is a major leap in that direction.</p>
    `,
    featured: true,
  },

  {
    id: '7',
    title: 'Shaping Ideas into Reality: TeachMyRobot Launches 3D Printing Labs in Partner Schools',
    slug: 'teachmyrobot-3d-printing-labs-launch',
    date: '2025-03-18',
    excerpt: 'TeachMyRobot introduces 3D Printing Labs in partner schools across India — empowering students to design, prototype, and innovate with hands-on learning aligned with NEP 2020.',
    coverImage: '/images/news/news_id07.jpg',
    content: `
      <h2>Shaping Ideas into Reality</h2>
      <p>TeachMyRobot is proud to introduce a groundbreaking initiative aimed at redefining innovation in education — the launch of 3D Printing Labs in schools across India.</p>
  
      <p>These state-of-the-art labs empower students to transform ideas into tangible models, using cutting-edge 3D printing technology. By integrating CAD (Computer-Aided Design), prototyping, and product engineering into the classroom, the program offers a powerful, hands-on learning experience that resonates with the goals of NEP 2020.</p>
  
      <img src="/images/news/news_id071.jpg" alt="description" style="width:100%; max-width:600px; margin: 20px 0;" />

      <h3>Real-Time Design and Learning</h3>
      <ul>
        <li>Designing functional, real-world objects from scratch</li>
        <li>Understanding structural and mechanical principles</li>
        <li>Learning iterative design thinking and model refinement</li>
        <li>Collaborating on industry-style workflows and group projects</li>
      </ul>
  
      <p>This initiative fosters not only creativity and critical thinking but also prepares students for the future of design, engineering, and advanced manufacturing. Students learn by doing — developing problem-solving skills, spatial awareness, and an engineering mindset from an early age.</p>
  
      <h3>Nationwide Rollout</h3>
      <p>The 3D Printing Labs are being deployed across our expanding network of partner institutions. These forward-thinking institutions have embraced our shared mission of bringing next-generation technology into the hands of students — igniting curiosity and confidence in the classroom.</p>
  
      <p>“Our students are now not just learning concepts, they are building them. These labs have opened a new dimension of learning,” shared a faculty member from one of our partner schools.</p>
  
      <h2>Creating the Makers of Tomorrow</h2>
      <p>At TeachMyRobot, we believe that technology should empower creation — not just consumption. Through this initiative, we aim to shape a generation of innovators, designers, and makers who are ready to lead the future — one printed prototype at a time.</p>
    `,
    featured: true,
  },
  {
    id: '8',
    title: 'Competitions & Exhibitions: Showcasing Student Talent Across India',
    slug: 'teachmyrobot-competitions-exhibitions',
    date: '2025-04-27',
    excerpt: 'From robotics championships to national STEM expos, TeachMyRobot empowers students to demonstrate their skills and creativity through real-world competitions and exhibitions.',
    coverImage: '/images/news/news_id061.jpg',
    content: `
      <h2>Empowering Through Competition</h2>
      <p>At TeachMyRobot, we believe in nurturing talent by providing students with opportunities beyond the classroom. As part of this mission, we have successfully organized and participated in multiple robotics and STEM competitions and exhibitions across India.</p>
  
      <p>These events serve as dynamic platforms for students to apply their knowledge, demonstrate creativity, and compete with peers from across the country. From building autonomous robots to presenting AI-driven solutions, our students have consistently impressed judges and audiences alike with their innovation and technical proficiency.</p>

      <img src="/images/news/news_id08.jpg" 
      alt="description" 
      style="width:100%; max-width:600px; max-height:400px; object-fit:cover; margin: 20px 0;" />

      <h3>Key Highlights</h3>
      <ul>
        <li>School-level robotics championships</li>
        <li>Regional STEM innovation challenges</li>
        <li>Live coding events and hardware hackathons</li>
        <li>Showcasing AI, IoT, and drone projects at national expos</li>
      </ul>
  
      <p>By engaging in these events, students gain real-world exposure, develop problem-solving skills under pressure, and learn to collaborate in high-stakes environments — all essential for their future careers in tech and engineering.</p>
  
      <h3>Exhibitions That Inspire</h3>
      <p>Our participation in prestigious educational exhibitions also allows us to demonstrate our work in curriculum innovation, STEM outreach, and edtech integration to educators, institutions, and policymakers.</p>
  
      <h2>Building a Future-Ready Generation</h2>
      <p>These experiences are shaping a confident, future-ready generation — and we are proud to be a part of their journey.</p>
    `,
    featured: true,
  },

  {
    id: '9',
    title: 'Empowering Students Beyond Academics: Career Counselling, Medical Camps & Vocational Training Initiatives',
    slug: 'teachmyrobot-career-counselling-medical-vocational',
    date: '2025-05-15',
    excerpt: 'TeachMyRobot’s holistic programs—career counselling, medical camps, and vocational training—empower students with the guidance, health support, and skills they need to succeed beyond academics.',
    coverImage: '/images/news/news_id09.jpg',
    content: `
      <h2>Empowering Students Beyond Academics</h2>
      <p>At TeachMyRobot, we believe that true education goes beyond textbooks — it must empower students both intellectually and personally. As part of our holistic development approach, we’ve launched a series of impactful programs across our partner schools, including career counselling sessions, medical health camps, and vocational training modules.</p>
  
      <h3>Career Counselling for Informed Futures</h3>
      <p>Our career counselling sessions are led by certified experts who help students explore diverse academic and career paths based on their interests, skills, and future goals. From engineering and medicine to design, entrepreneurship, and beyond — students gain clarity and direction early in their journey.</p>
  

       <img src="/images/news/medicalCamp.jpeg" alt="description" style="width:100%; max-width:600px;max-height:300px; margin: 20px 0;" />

      <h3>Health & Wellness Through Medical Camps</h3>
      <p>We organize medical and wellness camps to ensure the physical well-being of students. These include routine health checkups, nutrition awareness drives, and sessions on mental well-being — recognizing that a healthy student is a successful learner.</p>
  
      <h3>Vocational Training for Real-World Readiness</h3>
      <p>Our vocational training programs equip students with practical skills in areas like basic electronics, robotics assembly, 3D modeling, and digital literacy. These workshops bridge the gap between academic knowledge and industry demands, preparing students to thrive in real-world environments.</p>
  
      <h2>A Holistic Vision for the Future</h2>
      <p>By integrating academic guidance, health awareness, and hands-on training, we’re shaping not just smarter learners — but more confident, capable, and future-ready individuals.</p>
    `,
    featured: false,
  },

  {
    id: '10',
    title: 'Expanding Our Impact: New Partnerships with JNVs and KVs Across India',
    slug: 'teachmyrobot-new-jnv-kv-partnerships',
    date: '2025-05-13',
    excerpt: 'TeachMyRobot partners with JNVs and KVs across India to bring cutting-edge STEM and tech education to government school ecosystems — making innovation accessible to all.',
    coverImage: '/images/news/WhatsApp Image 2025-06-03 at 7.50.09 PM.jpeg',
    content: `
      <h2>Expanding Our Impact</h2>
      <p>We are delighted to announce a series of new collaborations with Jawahar Navodaya Vidyalayas (JNVs) and Kendriya Vidyalayas (KVs), as part of our ongoing mission to democratize access to future-focused STEM education across India.</p>
      <video controls autoplay loop muted playsinline style="width:100%; max-width:600px; margin: 20px 0;">
      <source src="/news_id101.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>

      <h3>Newly Joined Schools</h3>
      <ul>
        <li>KV Tura, Meghalaya</li>
        <li>JNV Somnath and JNV Anand, Gujarat</li>
        <li>JNV Parbhani, Maharashtra</li>
        <li>Multiple schools across rural Bihar, expanding our outreach to underserved communities</li>
      </ul>
  
      <p>These partnerships mark a significant milestone in our journey, as we bring robotics, AI, drone tech, and 3D printing labs into government school ecosystems — helping students explore cutting-edge technologies firsthand.</p>
  
      <h3>What We’re Offering</h3>
      <ul>
        <li>Fostering innovation and problem-solving</li>
        <li>Improving digital and technical literacy</li>
        <li>Encouraging project-based learning and teamwork</li>
        <li>Preparing students for careers in science and technology</li>
      </ul>
  
      <p>Through custom-designed programs, expert mentoring, and hands-on tech experiences, students at these schools are being equipped with skills that go beyond the standard curriculum.</p>
  
      <h2>A Vision for Equitable Education</h2>
      <p>With these new collaborations, TeachMyRobot continues to scale its vision of making equitable, high-quality tech education accessible to all — regardless of location or background.</p>
  
      <p>We're excited to work closely with these institutions and look forward to creating lasting impact in the lives of their students.</p>
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
