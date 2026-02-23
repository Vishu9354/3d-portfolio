const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  // {
  //   imgPath: "/images/logos/company-logo-1.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-2.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-3.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-4.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-5.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-6.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-7.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-8.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-9.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-10.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-11.png",
  // },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  // {
  //   name: "Python Developer",
  //   imgPath: "/images/logos/python.svg",
  // },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  // {
  //   name: "Project Manager",
  //   imgPath: "/images/logos/git.svg",
  // },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Project Manager",
  //   modelPath: "/models/git-svg-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, -Math.PI / 4, 0],
  // },
];

const expCards = [
  {
    review:
      "Built a scalable SaaS-based Hospital Management Platform using React.js and Vite. Focused on reusable components, role-based auth, and real-time API integration — serving 25+ hospitals in production.",
    imgPath: "/images/exp-hms.png",      // 📸 Add screenshot of HMS project here
    logoPath: "/images/logo-arvon.png",  // 🏢 ARVON Web Solution logo
    title: "Frontend Developer Intern",
    date: "March 2025 - Present",
    responsibilities: [
      "Built a scalable SaaS-based Hospital Management Platform using React.js and Vite, serving 25+ hospitals.",
      "Developed reusable UI components and implemented role-based authentication and authorization.",
      "Integrated REST APIs to enable real-time data synchronization with backend services.",
      "Optimized frontend performance, improving page load speed and UI responsiveness.",
      "Collaborated with backend engineers and product teams in an agile startup environment.",
    ],
  },
  {
    review:
      "Developed a full-stack e-commerce platform with authentication, product management, and payment flow. Built scalable React frontends for college websites with clean, modular component architecture.",
    imgPath: "/images/exp-ecommerce.png",  // 📸 Add screenshot of e-commerce project here
    logoPath: "/images/logo-webdev.png",   // 🌐 Your personal/freelance logo or generic web icon
    title: "Full Stack Web Developer",
    date: "April 2023 - October 2024",
    responsibilities: [
      "Built a full-stack e-commerce platform with authentication, product management, and payment flow.",
      "Developed responsive web applications using React.js, REST APIs, and SQL-based backend integration.",
      "Created scalable frontend architecture for college websites with modular UI components.",
      "Followed industry best practices for UI performance, accessibility, and responsive design.",
    ],
  },
  {
    review:
      "Led the web team for ANHAD, IIT Jammu's annual cultural fest. Delivered a fully responsive event website with dynamic content, coordinating the team to ship features on deadline.",
    imgPath: "/images/exp-anhad.png",     // 📸 Add screenshot of ANHAD website here
    logoPath: "/images/logo-anhad.png",   // 🎭 ANHAD / IIT Jammu logo
    title: "Co-Head of Web Team – ANHAD",
    date: "December 2023 - March 2024",
    responsibilities: [
      "Led the web team for ANHAD, IIT Jammu's annual cultural fest.",
      "Designed and maintained the event website with responsive layouts and dynamic content.",
      "Coordinated with team members to deliver all frontend features on schedule.",
    ],
  },
  {
    review:
      "Developed and maintained the official website for the Nature and Adventure Club at IIT Jammu. Implemented a responsive, mobile-first UI with cross-browser compatibility.",
    imgPath: "/images/exp-nac.png",      // 📸 Add screenshot of NAC website here
    logoPath: "/images/logo-nac.png",    // 🌿 NAC / IIT Jammu logo
    title: "Web Developer – Nature & Adventure Club",
    date: "February 2024 - April 2024",
    responsibilities: [
      "Developed and maintained the official website for the Nature and Adventure Club at IIT Jammu.",
      "Implemented responsive UI components using HTML, CSS, and JavaScript.",
      "Ensured cross-browser compatibility and mobile-first design across all pages.",
    ],
  },
];



const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
