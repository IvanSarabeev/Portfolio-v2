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

export const projectShowcase = [
    {
        id:1,
        title:"VanLife",
        preview:"https://rent-vanlife.netlify.app",
        imgSrc:"url('')",
        source:"https://github.com/IvanSarabeev/VanLife",
        stack:["React","TypeScript","Tailwind","Mirage","React-Router","Framer Motion","Netlify"],
        text:"Welcome to VanLife, your go-to platform for renting vans and exploring the open road. This React-based website offers a seamless experience for both renters and hosts. Users can navigate through the Home, About, Vans, and Host sections that requiress authentication process to ensures a secure environment.",
    },
    {
        id:2,
        title:"Movie Watchlist",
        preview:"https://movie-watchlist-delta-pied.vercel.app",
        imgSrc:"url('')",
        source:"https://github.com/IvanSarabeev/Movie-Watchlist",
        stack:["React","TypeScript","Tailwind","React-Router","Vercel"],
        text:"Searching app with minamalystic design, where you can find your favourite movie, also you get to search seemlessly and flawlessly, accross a collection of movies and if you don't have time, you can save them for later by adding them to your collection.",
    },
    {
        id:3,
        title:"Task Manager",
        preview:"https://real-estates-ood.netlify.app",
        imgSrc:"url('')",
        source:"https://github.com/IvanSarabeev/RealEstate-web-starterpack",
        stack:["React","TypeScript","Tailwind","Vercel"],
        text:"Searching app with minamalystic design, where you can find your favourite movie, also you get to search seemlessly and flawlessly, accross a collection of movies and if you don't have time, you can save them for later by adding them to your collection.",
    },    
] as const;

export const noteworthProjects = [
    {
        id:1,
        title:"Mish Mash",
        preview:"https://mishmashgrillmeal.com",
        source:"https://github.com/IvanSarabeev/Mish-Mash",
        stack:["React","React-Router","Tailwind","Framer Motion"],
        text:"Elevating Fast Food through Innovation 🚀 - 🍟 A UK-based online fast-food platform designed for convenience and flavor. - 💻 Tech Stack: React and Tailwind for a responsive UI. - 🌍 Leveraging Netlify for lightning-fast hosting.",
    },
    {
        id:2,
        title:"Hello-UE",
        preview:"",
        source:"https://github.com/IvanSarabeev/hello-ue",
        stack:["React","Node","Tailwind","Chakra UI"],
        text:"I was participaiting in a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, we were developing functional specifications, through many API request and react libraries and many more JavaScript functionalities.",
    },
    {
        id:2,
        title:"Hockey Club - Varna",
        preview:"http://www.hcvarna.bg",
        source:"https://github.com/IvanSarabeev/Hockey-Club-Varna",
        stack:["HTML5","CSS3","JavaScript","AnimateCss"],
        text:"I am happy to share that I've developed the website of our hockey club. I had the idea to focus on interactive design and a friendly interface that makes it easy to navigate and use for any user. The website provides information about the club and its events, supporting communication between the fans. \n I'm planning on changing the entire website by using React, Tailwind and Flowbite for the UI.",
    },
] as const;