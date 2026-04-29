export const portfolioData = {
  name: "Vũ Hoàng Chung",
  title: "Backend Java Developer",
  tagline:
    "Goal-oriented Fresher Java Developer with strong Spring Boot and Microservices. Dedicated to building scalable backend systems, clean code (SOLID), DB optimization, and secure authentication.",
  phone: "0357628050",
  email: "vuhoangchung2020@gmail.com",
  github: "https://github.com/Hoangjunss",
  location: "Ho Chi Minh City, Vietnam",

  skills: [
    {
      category: "Languages",
      items: ["Java (Core)", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Spring Security",
        "JWT",
        "WebSocket",
        "JUnit 5",
        "Mockito",
      ],
    },
    {
      category: "Frontend",
      items: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Database & Caching",
      items: ["MySQL", "Redis"],
    },
    {
      category: "Tools & DevOps",
      items: ["Docker", "Git", "Maven", "Postman", "Swagger", "SVN awareness"],
    },
    {
      category: "Architecture",
      items: ["SOLID Principles", "Design Patterns", "Microservices Architecture"],
    },
  ],

  experience: [
    {
      company: "VINIPR CO., LTD.",
      position: "Backend Java Developer Intern",
      location: "Ho Chi Minh City",
      startDate: "May 2025",
      endDate: "Aug 2025",
      achievements: [
        "Developed 20+ REST APIs for e-commerce modules (order management, product CRUD, checkout flow) using Spring Boot, with built-in input validation and global exception handling.",
        "Integrated Redis caching for high-traffic endpoints, helping to reduce database load.",
        "Wrote 50+ unit tests (JUnit, Mockito) achieving 80% code coverage, ensuring quality for core modules.",
        "Optimized search and query performance by adding database indexes and refining SQL/JPA queries, significantly improving response time on large datasets.",
        "Created internal technical documentation and API usage guides for team members, helping new developers onboard faster.",
        "Participated in bug fixing and troubleshooting issues reported by QA, resolving 15+ bugs during the internship.",
        "Applied SOLID principles to refactor legacy code, improving maintainability. Collaborated in Agile/Scrum with daily stand-ups and code reviews.",
      ],
    },
  ],

  education: {
    school: "Saigon University",
    degree: "Bachelor of Information Technology",
    gpa: "3.3/4.0",
    location: "Ho Chi Minh City",
    startDate: "2022",
    endDate: "2026",
    expectedGraduation: true,
    coursework:
      "Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management (MySQL), Web Development",
  },

  projects: [
    {
      title: "Real-time Dating Application",
      description:
        "A modern dating platform with real-time messaging and matching features",
      technologies: ["Spring Boot", "WebSocket", "MySQL", "ReactJS", "JWT"],
      github: "https://github.com/Hoangjunss/dating",
      startDate: "Jan 2026",
      endDate: "Apr 2026",
      highlights: [
        "Built a real-time messaging engine using WebSocket & STOMP, achieving low-latency message delivery.",
        "Secured REST APIs with Spring Security & JWT, implementing role-based access control (RBAC) to protect user data endpoints.",
        "Optimized the matching feature by adding database indexes and refining JPA queries, noticeably improving response speed under typical load.",
        "Wrote unit and integration tests using JUnit 5 & Mockito, helping maintain reliable core logic and reducing regression bugs.",
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
          caption: "Real-time Messaging Interface",
        },
        {
          url: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&q=80",
          caption: "User Matching Algorithm Dashboard",
        },
        {
          url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          caption: "Profile Management & Security",
        },
      ],
    },
    {
      title: "Secure E-commerce Platform",
      description:
        "Full-stack e-commerce solution with advanced security and caching",
      technologies: ["Spring Boot", "Redis", "Docker", "Cloudinary", "MySQL"],
      github: "https://github.com/Hoangjunss/ecommerce",
      startDate: "Aug 2025",
      endDate: "Dec 2025",
      highlights: [
        "Added 2FA OTP authentication using Java Mail and Redis (TTL-based) to improve account security without complicating user experience.",
        "Integrated Redis caching for frequently accessed data, which visibly reduced database load and kept response times low during testing.",
        "Packaged the application with Docker to ensure consistent environments across development and staging.",
        "Used Cloudinary API to handle image resizing and lazy loading, improving frontend performance on slower networks.",
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          caption: "E-commerce Product Catalog",
        },
        {
          url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
          caption: "Secure Payment Processing",
        },
        {
          url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          caption: "Order Management Dashboard",
        },
      ],
    },
  ],
};