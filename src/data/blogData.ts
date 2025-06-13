// This file serves as a mock data source for blog posts
// In a production environment, this would likely come from a CMS or API

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Arduino for Kids',
    slug: 'getting-started-with-arduino-for-kids',
    author: 'Sarah Johnson',
    date: '2025-04-15',
    category: 'Robotics',
    excerpt: 'An introduction to Arduino programming for children ages 8-12. Learn how to create simple circuits and write basic code.',
    coverImage: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>Why Arduino is Perfect for Kids</h2>
      <p>Arduino provides an excellent introduction to both electronics and programming. Its visual nature helps children understand the connection between code and physical actions in the real world.</p>
      
      <h3>Materials You'll Need</h3>
      <ul>
        <li>Arduino Uno board</li>
        <li>USB cable</li>
        <li>Breadboard</li>
        <li>LED lights (various colors)</li>
        <li>Resistors (220 ohm)</li>
        <li>Jumper wires</li>
      </ul>
      
      <h3>Setting Up Your First Circuit</h3>
      <p>Begin by connecting the Arduino to your computer and installing the Arduino IDE. Then, create a simple circuit with an LED and a resistor.</p>
      
      <h3>Writing Your First Code</h3>
      <pre><code>
void setup() {
  pinMode(13, OUTPUT);  // Set pin 13 as output
}

void loop() {
  digitalWrite(13, HIGH);  // Turn on the LED
  delay(1000);            // Wait for 1 second
  digitalWrite(13, LOW);   // Turn off the LED
  delay(1000);            // Wait for 1 second
}
      </code></pre>
      
      <h3>Expanding with Projects</h3>
      <p>Once comfortable with the basics, children can create more complex projects like:</p>
      <ul>
        <li>Traffic light simulator</li>
        <li>Musical instrument</li>
        <li>Simple robot</li>
      </ul>
      
      <h2>Benefits of Arduino Learning</h2>
      <p>Learning Arduino helps develop critical thinking, problem-solving skills, and provides a foundation for understanding more complex technologies later on.</p>
    `,
    tags: ['arduino', 'programming', 'electronics', 'kids', 'STEM'],
  },
  {
    id: '2',
    title: 'The Importance of Computational Thinking in Early Education',
    slug: 'importance-of-computational-thinking-in-early-education',
    author: 'Dr. Michael Chen',
    date: '2025-04-10',
    category: 'Education',
    excerpt: 'Why teaching computational thinking skills to young students is crucial for future success in our technology-driven world.',
    coverImage: 'https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>What is Computational Thinking?</h2>
      <p>Computational thinking involves breaking down complex problems into smaller, manageable parts, recognizing patterns, developing algorithms, and understanding how to create solutions that can be implemented by computers.</p>
      
      <h3>Core Components of Computational Thinking</h3>
      <ul>
        <li><strong>Decomposition:</strong> Breaking down complex problems into smaller parts</li>
        <li><strong>Pattern Recognition:</strong> Identifying similarities or common differences</li>
        <li><strong>Abstraction:</strong> Focusing on important information only, ignoring irrelevant details</li>
        <li><strong>Algorithms:</strong> Developing step-by-step solutions</li>
      </ul>
      
      <h3>Why Start Early?</h3>
      <p>Children who learn computational thinking from an early age develop stronger problem-solving skills and are better prepared for future STEM education and careers.</p>
      
      <h2>Implementing Computational Thinking in the Classroom</h2>
      <p>Educators can incorporate computational thinking into various subjects:</p>
      
      <h3>Mathematics</h3>
      <p>Use decomposition to break down complex math problems, and develop step-by-step algorithms for solving different types of equations.</p>
      
      <h3>Science</h3>
      <p>Apply pattern recognition when studying natural phenomena and use abstraction to create models of complex systems.</p>
      
      <h3>Language Arts</h3>
      <p>Analyze story structures as algorithms and decompose the writing process into manageable steps.</p>
      
      <h2>Activities That Promote Computational Thinking</h2>
      <ul>
        <li>Unplugged coding activities (no computers needed)</li>
        <li>Block-based programming with tools like Scratch</li>
        <li>Logic puzzles and games</li>
        <li>Robotics challenges</li>
      </ul>
      
      <p>By incorporating these elements into early education, we prepare students not just for coding, but for a future where computational thinking is essential across most fields and disciplines.</p>
    `,
    tags: ['computational thinking', 'education', 'STEM', 'teaching methods', 'problem solving'],
  },
  {
    id: '3',
    title: 'Robotics Competitions: Building More Than Just Robots',
    slug: 'robotics-competitions-building-more-than-just-robots',
    author: 'James Wilson',
    date: '2025-04-05',
    category: 'Competitions',
    excerpt: 'How robotics competitions develop teamwork, problem-solving, and communication skills in students of all ages.',
    coverImage: 'https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>The Growing World of Robotics Competitions</h2>
      <p>From FIRST LEGO League to VEX Robotics Competitions, organized robotics challenges have exploded in popularity over the past decade, engaging students from elementary through high school.</p>
      
      <h3>Popular Robotics Competition Formats</h3>
      <ul>
        <li><strong>FIRST LEGO League:</strong> For ages 9-16, using LEGO Mindstorms</li>
        <li><strong>VEX Robotics Competition:</strong> Middle and high school division</li>
        <li><strong>FIRST Robotics Competition:</strong> High school teams with professional-level robotics</li>
        <li><strong>Botball:</strong> Educational autonomous robotics program</li>
      </ul>
      
      <h2>Skills Developed Beyond Engineering</h2>
      
      <h3>Teamwork and Collaboration</h3>
      <p>Students learn to work together effectively, dividing tasks based on individual strengths while supporting each other through challenges.</p>
      
      <h3>Project Management</h3>
      <p>Teams must manage timelines, resources, and priorities to meet competition deadlines—essential skills for any career.</p>
      
      <h3>Communication</h3>
      <p>From presenting designs to judges to documenting work and coordinating with teammates, communication is central to success.</p>
      
      <h3>Resilience and Adaptability</h3>
      <p>When robots fail (and they will), students learn to troubleshoot under pressure and adapt to unexpected challenges—developing grit and perseverance.</p>
      
      <h2>Starting a Robotics Competition Team</h2>
      <p>For schools or community organizations interested in starting a team:</p>
      <ol>
        <li>Choose the appropriate competition based on student ages and resources</li>
        <li>Secure mentors with technical backgrounds</li>
        <li>Obtain funding through grants, sponsors, or school budgets</li>
        <li>Create a sustainable program structure with clear roles</li>
        <li>Emphasize the learning process over winning</li>
      </ol>
      
      <p>The true value of robotics competitions extends far beyond the technical skills students develop—creating well-rounded individuals prepared for future challenges in any field.</p>
    `,
    tags: ['robotics', 'competitions', 'teamwork', 'STEM education', 'problem solving'],
  },
  {
    id: '4',
    title: '5 Coding Languages Every Child Should Learn',
    slug: '5-coding-languages-every-child-should-learn',
    author: 'Emily Rodriguez',
    date: '2025-03-28',
    category: 'Programming',
    excerpt: 'A guide to age-appropriate programming languages that build strong foundations for young coders.',
    coverImage: 'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
      <h2>Why Teaching Kids to Code Matters</h2>
      <p>Learning to code helps children develop logical thinking, creativity, and problem-solving skills that are valuable in all areas of life and future careers.</p>
      
      <h2>Age-Appropriate Programming Languages</h2>
      
      <h3>1. Scratch (Ages 7-12)</h3>
      <p>A visual block-based programming language developed by MIT that allows children to create animations and games by snapping blocks together.</p>
      <p><strong>Benefits:</strong> Teaches fundamental programming concepts without complex syntax; encourages creativity and storytelling.</p>
      
      <h3>2. Python (Ages 10+)</h3>
      <p>A text-based language with clear, readable syntax that's excellent for beginners but powerful enough for professional use.</p>
      <p><strong>Benefits:</strong> Simple syntax, wide range of applications from web development to data science, and extensive learning resources.</p>
      
      <h3>3. JavaScript (Ages 12+)</h3>
      <p>The language of the web that allows interaction with websites and browser-based applications.</p>
      <p><strong>Benefits:</strong> Instant visual feedback when changing websites, useful for creating interactive games and applications.</p>
      
      <h3>4. Swift Playgrounds (Ages 8+)</h3>
      <p>Apple's educational tool for learning Swift programming language through an interactive, game-like environment.</p>
      <p><strong>Benefits:</strong> Engaging puzzles, smooth progression from blocks to text coding, and potential for iOS app development.</p>
      
      <h3>5. Minecraft Education Edition with Code Builder (Ages 8+)</h3>
      <p>Uses a familiar game environment to teach programming concepts through MakeCode, a block-based coding platform.</p>
      <p><strong>Benefits:</strong> Leverages children's interest in Minecraft to teach computational thinking in a 3D environment.</p>
      
      <h2>Progression Path for Young Coders</h2>
      <ol>
        <li>Start with block-based programming (Scratch, MakeCode)</li>
        <li>Transition to hybrid environments (Swift Playgrounds)</li>
        <li>Move to beginner-friendly text languages (Python)</li>
        <li>Explore specialized languages based on interests (JavaScript for web, Java for Minecraft mods)</li>
      </ol>
      
      <p>The key is finding languages that match a child's interests and provide achievable challenges that grow with their abilities. With the right approach, coding becomes not just a valuable skill, but an enjoyable creative outlet.</p>
    `,
    tags: ['coding', 'programming languages', 'education technology', 'Python', 'Scratch'],
  },
  {
  id: '5',
  title: 'From Curiosity to Creation: How AI-Powered Learning Kits Are Changing STEM Education in India',
  slug: 'ai-powered-learning-kits-in-india-stem-revolution',
  author: 'Priya Malhotra',
  date: '2025-06-13',
  category: 'AI in Education',
  excerpt: 'Explore how affordable AI-powered learning kits are revolutionizing STEM education in India, especially in government schools. Learn how students are using tools like Arduino, Edge AI, and vision systems to build real-world solutions at a young age.',
  coverImage: 'https://images.pexels.com/photos/7868889/pexels-photo-7868889.jpeg?',
  content: `
    <h2>What Are AI-Powered Learning Kits?</h2>
    <p>AI-powered learning kits are modular education kits that integrate sensors, microcontrollers (like Arduino or Raspberry Pi), and pre-trained AI models. These kits allow students to build hands-on projects such as face detection, voice control systems, or smart irrigation devices—while learning the logic behind them.</p>

    <h3>Core Components of an AI Kit</h3>
    <ul>
      <li>Arduino Uno or ESP32 Microcontroller</li>
      <li>Camera module (for computer vision)</li>
      <li>Edge AI board (like NVIDIA Jetson Nano or Raspberry Pi)</li>
      <li>Pre-trained AI models (face recognition, gesture detection)</li>
      <li>Drag-and-drop coding interface or Python IDE</li>
    </ul>

    <h2>Why They're Game-Changing in India</h2>
    <p>Traditional labs are expensive and complex to maintain. AI kits provide a low-cost, plug-and-play solution for schools. Especially in rural PM SHRI schools, these kits are a bridge to cutting-edge technology—without needing internet access or costly infrastructure.</p>

    <h3>Case Study: A Village School in Maharashtra</h3>
    <p>Students used a local AI kit to design a facial recognition system for attendance. It used an ESP32-CAM module and open-source software to detect student faces—saving time and creating accountability. Their project later won a regional STEM innovation award.</p>

    <h2>Learning Outcomes</h2>
    <ul>
      <li>Understanding of real-world AI applications</li>
      <li>Ability to build prototypes with sensors and code</li>
      <li>Confidence to present solutions to real-world problems</li>
      <li>Encouragement to pursue tech careers early</li>
    </ul>

    <h2>How We’re Implementing AI Kits in PM SHRI Schools</h2>
    <p>We’ve launched our AI learning program in 10+ government schools with support from CSR and ed-tech partnerships. Each kit includes:
    <ul>
      <li>Step-by-step project booklets in Hindi and English</li>
      <li>Bilingual video tutorials and offline activities</li>
      <li>AI ethics and safety training modules</li>
    </ul>
    </p>

    <h2>What's Next: Humanoid + AI Integration</h2>
    <p>We’re working on integrating these kits with basic humanoid robots—allowing students to train models to interact in Hindi, mimic facial expressions, or respond to gestures. The goal is to prepare students for future-ready jobs in robotics, AI, and automation.</p>

    <h2>Conclusion</h2>
    <p>AI learning kits are not just tools—they are catalysts. In places where even a computer lab seemed like a luxury a few years ago, kids are now designing intelligent systems. This is India’s STEM revolution in motion—and it’s powered by young minds, microcontrollers, and limitless curiosity.</p>
  `,
  tags: ['AI education', 'robotics kits', 'Arduino', 'edge computing', 'PM SHRI schools', 'rural STEM']
 }

];

export const getRecentBlogPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag.toLowerCase()));
};

export const getAllCategories = (): string[] => {
  const categories = new Set(blogPosts.map(post => post.category));
  return Array.from(categories);
};

export const getAllTags = (): string[] => {
  const tags = new Set(blogPosts.flatMap(post => post.tags));
  return Array.from(tags);
};