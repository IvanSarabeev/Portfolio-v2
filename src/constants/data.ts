export const headerLinks = [
    { id:1, label:"01.", text:"About", link:""},
    { id:2, label:"02.", text:"Experience", link:""},
    { id:3, label:"03.", text:"Work", link:""},
    { id:4, label:"04.", text:"Contact", link:""},
] as const;

export const socialLinks = [
    { id:1, title:"GitHub",icon:"", link:"https://github.com/IvanSarabeev"},
    { id:2, title:"LinkedIn",icon:"", link:"https://www.linkedin.com/in/ivansarabeev"},
    { id:3, title:"Facebook",icon:"", link:"https://www.facebook.com/ivan.sarabeev"},
] as const;

export const experienceList = [
    {id:1, title:"Hockey Club",subtitle:"@ Septemvri", period:"October 2023 - Present", text:""},
    {id:2, title:"Ice Hockey Coach",subtitle:"@ HC Varna", period:"January 2021 - Present", text:""},
    {id:3, title:"Instructor",subtitle:"@ OP Sport - Varna", period:"January 2020 - Present", text:""},
    {id:4, title:"Freelancer",subtitle:"", period:"Currently Active", text:""},
] as const;

export const projectShowcase = [
    {
        id:1,
        title:"VanLife",
        preview:"https://rent-vanlife.netlify.app",
        source:"https://github.com/IvanSarabeev/VanLife",
        imgSrc:"https://res.cloudinary.com/dplqrjsty/image/upload/v1705050811/omsispfx8xkexeg4a796.png",
        stack:["React","TypeScript","Tailwind","Mirage","React-Router","Framer Motion","Netlify"],
        text:"Welcome to VanLife, your go-to platform for renting vans and exploring the open road. This React-based website offers a seamless experience for both renters and hosts. Users can navigate through the Home, About, Vans, and Host sections that requiress authentication process to ensures a secure environment.",
    },
    {
        id:2,
        title:"Movie Watchlist",
        preview:"https://movie-watchlist-delta-pied.vercel.app",
        source:"https://github.com/IvanSarabeev/Movie-Watchlist",
        imgSrc:"https://res.cloudinary.com/dplqrjsty/image/upload/v1705050812/w256fuh9lpbh0tjbnqpq.png",
        stack:["React","TypeScript","Tailwind","React-Router","Vercel"],
        text:"Searching app with minamalystic design, where you can find your favourite movie, also you get to search seemlessly and flawlessly, accross a collection of movies and if you don't have time, you can save them for later by adding them to your collection.",
    },
    {
        id:3,
        title:"Task Manager",
        preview:"",
        source:"https://github.com/IvanSarabeev/TaskManager",
        imgSrc:"https://res.cloudinary.com/dplqrjsty/image/upload/v1705050811/jeao6pzobncv7di8jq1g.png",
        stack:["Laravel","PHP8","Alpine.js","MySQL","Tailwind","Bootstrap"],
        text:"Task Manager is a secure task management app with user authentication, protected routes, and CRUD features. Organize, prioritize, and collaborate on tasks seamlessly with this intuitive solution. and mobile friendly design .",
    },    
] as const;

export const noteworthProjects = [
    {
        id:1,
        title:"Todo Application",
        preview:"https://todo-app-olive-nine.vercel.app",
        source:"https://github.com/IvanSarabeev/Todo-App",
        stack:["React","TypeScript","Tailwind","Vercel"],
        text:"Searching app with minamalystic design, where you can find your favourite movie, also you get to search seemlessly and flawlessly, accross a collection of movies and if you don't have time, you can save them for later by adding them to your collection.",
    },
    {
        id:2,
        title:"Mish Mash",
        preview:"https://mishmashgrillmeal.com",
        source:"https://github.com/IvanSarabeev/Mish-Mash",
        stack:["React","React-Router","Tailwind","Framer Motion","Netlify"],
        text:"Elevating Fast Food through Innovation 🚀 - 🍟 A UK-based online fast-food platform designed for convenience and flavor. - 💻 Tech Stack: React and Tailwind for a responsive UI. - 🌍 Leveraging Netlify for lightning-fast hosting.",
    },
    {
        id:3,
        title:"Hello-UE",
        preview:"",
        source:"https://github.com/IvanSarabeev/hello-ue",
        stack:["React","Node","Tailwind","Chakra UI"],
        text:"I was participaiting in a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, we were developing functional specifications, through many API request and react libraries and many more JavaScript functionalities.",
    },
    {
        id:4,
        title:"Hockey Club - Varna",
        preview:"http://www.hcvarna.bg",
        source:"https://github.com/IvanSarabeev/Hockey-Club-Varna",
        stack:["HTML5","CSS3","JavaScript","Animate.css"],
        text:"I am happy to share that I've developed the website of our hockey club. I had the idea to focus on interactive design and a friendly interface that makes it easy to navigate and use for any user. The website provides information about the club and its events, supporting communication between the fans. \n I'm planning on changing the entire website by using React, Tailwind and Flowbite for the UI.",
    },
] as const;