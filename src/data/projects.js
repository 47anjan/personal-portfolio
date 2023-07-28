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
        img: "assets/notes.png",
      },
      {
        info: "Page for pin notes",
        img: "assets/note-pin.png",
      },
      {
        info: "Page for deleted notes",
        img: "assets/note-delete.png",
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
        img: "assets/class.png",
      },
      {
        info: "Student: Selected classes",
        img: "assets/selected.png",
      },
      {
        info: "Student: Enrolled classes",
        img: "assets/enrolled.png",
      },
      {
        info: "Student: Payment page",
        img: "assets/payment.png",
      },
      {
        info: "Student:Payments history",
        img: "assets/paymenthistory.png",
      },
      {
        info: "Instructor: Add class",
        img: "assets/addclass.png",
      },
      {
        info: "Instructor: All classes",
        img: "assets/allclasses.png",
      },
      {
        info: "Admin: Manage classes",
        img: "assets/manageclasses.png",
      },
      {
        info: "Admin: Manage users",
        img: "assets/manageusers.png",
      },
    ],
  },
  {
    id: 3,
    title: "Project Netflix",
    disc: "An entertainment base site for exploring movies and TV shows",
    tools: ["ReactJS", "TailwindCSS"],
    image: "/assets/netflix.png",
    selected: false,
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
        img: "assets/homepagenetflix.png",
      },
      {
        info: "Movies",
        img: "assets/movies.png",
      },
      {
        info: "Tv Shows",
        img: "assets/tv.png",
      },
      {
        info: "Trending",
        img: "assets/trending.png",
      },
      {
        info: "My List",
        img: "assets/mylist.png",
      },
      {
        info: "Search page",
        img: "assets/search.png",
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
        img: "assets/linkedinhome.png",
      },
    ],
  },
  {
    id: 5,
    title: "LeetGame",
    disc: "A Video Game Discovery Web App! This project is a web application inspired by Rawg, designed to help users discover new and exciting video games. With a sleek and intuitive interface, powerful features, and seamless navigation, this app aims to provide an immersive gaming experience",
    tools: [
      "ReactJS",
      "TypeScript",
      "Chakra UI",
      "React Query",
      "Zustand",
      "React Router",
      "Axios",
    ],
    image: "/assets/leetgame.png",
    selected: true,
    live: "https://leetgame-fbb46.web.app/",
    client: "https://github.com/anjankarmakar10/leetgame-typescript",
    features: [
      "Game Search: Easily search for your favorite games using keywords and get instant results.",
      "Game Details: Dive deep into the details of each game, including ratings, descriptions, genres, and screenshots.",
      "Infinite Scroll: Enjoy endless browsing with the implementation of infinite scroll, loading more games as you scroll down.",
      "Dark Mode: Personalize your experience with a stylish and eye-friendly dark mode",
      "Responsive Design: The app is fully responsive, ensuring a seamless experience across various devices and screen sizes.",
    ],
    images: [
      {
        info: "Homepage",
        img: "assets/leetgame-home.png",
      },
      {
        info: "Details Page",
        img: "assets/leetgamedetails.png",
      },
    ],
  },
];
