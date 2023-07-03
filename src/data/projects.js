export default [
  {
    id: 1,
    title: "Google Keep",
    disc: "A note app inspired by google keep",
    tools: [
      "ReactJS",
      "TailwindCSS",
      "Firebase",
      "React query",
      "Nodejs",
      "Express",
      "MongoDB",
    ],
    image: "/assets/googlekeep.png",
    selected: false,
    features: [
      "Frontend is developed with ReactJS, TailwindCSS",
      "Firebase is used for user authentication and MongoDB is used to store notes",
      "User can create update and delete note",
      "Ability to customize note color",
    ],
    live: "https://keep-client-42341.web.app",
    client: "https://github.com/anjankarmakar10/google-keep-client",
    server: "https://github.com/anjankarmakar10/google-keep-server",
    images: [
      {
        info: "Homepage",
        img: "/public/assets/notes.png",
      },
      {
        info: "Page for pin notes",
        img: "/public/assets/note-pin.png",
      },
      {
        info: "Page for deleted notes",
        img: "/public/assets/note-delete.png",
      },
    ],
  },
  {
    id: 2,
    title: "Unilearners",
    disc: "An education-based site for sharing and exploring classes for instructors and students.",
    tools: [
      "React JS",
      "Tailwind",
      "daisyUI",
      "React query",
      "Firebase",
      "Nodejs",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    features: [
      "Clean and user friendly user interface",
      "Frontend is developed with ReactJS, TailwindCSS, and DaisyUI.",
      "The backend was developed with Express, Node JS, and MongoDB",
      "Firebase and JWT are used for user authentication",
      "Implement code splitting to increase performance.",
      "Admin: Admin can manage classes and users",
      "Instructor: Instructor can add classes and also manage won classes",
      "Student: Student can select classes and also enroll; student also can see classes selected, enrolled, and payment history.",
    ],
    image: "/assets/Unilearner.png",
    selected: true,
    live: "https://unilearners-client.web.app",
    client: "https://github.com/anjankarmakar10/unilearners-client",
    server: "https://github.com/anjankarmakar10/unilearners-server",
    images: [
      {
        info: "Student: View class",
        img: "/public/assets/class.png",
      },
      {
        info: "Student: Selected classes",
        img: "/public/assets/selected.png",
      },
      {
        info: "Student: Enrolled classes",
        img: "/public/assets/enrolled.png",
      },
      {
        info: "Student: Payment page",
        img: "/public/assets/payment.png",
      },
      {
        info: "Student:Payments history",
        img: "/public/assets/paymenthistory.png",
      },
      {
        info: "Instructor: Add class",
        img: "/public/assets/addclass.png",
      },
      {
        info: "Instructor: All classes",
        img: "/public/assets/note-delete.png",
      },
      {
        info: "Admin: Manage classes",
        img: "/public/assets/manageclasses.png",
      },
      {
        info: "Admin: Manage users",
        img: "/public/assets/manageusers.png",
      },
    ],
  },
  {
    id: 3,
    title: "Project Netflix",
    disc: "An entertainment base site for exploring movies and TV shows",
    tools: ["ReactJS", "TailwindCSS"],
    image: "/assets/netflix.png",
    selected: true,
    live: "https://majestic-sfogliatella-77e5bd.netlify.app",
    client: "https://github.com/anjankarmakar10/project-netflix",
    features: [
      "Frontend is developed with React JS, and Tailwind",
      "User can see movies details, search and also bookmark them",
      "All data come from  TMDb Movie Database",
    ],
    images: [
      {
        info: "Homepage",
        img: "/public/assets/homepagenetflix.png",
      },
      {
        info: "Movies",
        img: "/public/assets/movies.png",
      },
      {
        info: "Tv Shows",
        img: "/public/assets/tv.png",
      },
      {
        info: "Trending",
        img: "/public/assets/trending.png",
      },
      {
        info: "My List",
        img: "/public/assets/mylist.png",
      },
      {
        info: "Search page",
        img: "/public/assets/search.png",
      },
    ],
  },
  {
    id: 4,
    title: "Linkedin Landing page",
    disc: "A real-world landing page based on LinkedIn",
    tools: ["ReactJS", "Style-components"],
    image: "/assets/linkedin.png",
    selected: true,
    live: "https://linked-in-clone-three-dun.vercel.app/",
    client: "https://github.com/anjankarmakar10/linkedIn-clone",
    features: [
      "A clean and fully responsive user interface",
      "Frontend is utilized with ReactJS, Style-Components",
    ],
    images: [
      {
        info: "Homepage",
        img: "/public/assets/linkedinhome.png",
      },
    ],
  },
];
