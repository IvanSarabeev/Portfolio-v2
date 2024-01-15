import Main from "assets/images/main.jpg"

const skillsList = [
    {id:1, title:"JavaScript (ES6+)"},
    {id:4, title:"TypeScript"},
    {id:2, title:"React"},
    {id:5, title:"Framer Motion"},
    {id:3, title:"PHP"},
    {id:6, title:"Laravel"},
] as const;

const About = () => {
  return (
    <section className="w-full h-dvh">
        <h2 className="numbered-headings">About Me</h2>
        <article className="gap-12 grid grid-cols-1 md:grid-cols-2">
            <div className="block text-pretty">
                <p className="mb-3.5">Hello, I'm Ivan Sarabeev, a passionate <strong className="text-green">  React Developer </strong> and Ice Hockey coach from Varna, Bulgaria.</p>
                <p className="mb-3.5">I'm enthusiastic about embarking on my proffessional journey in web development and constatnly seeking new challenges and growth opportunities.</p>
                <p className="mb-3.5">My goal is to transform complex problems into elegant and user-friednly solutions, driven by my passion for creating beautiful and intuitive web experience.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <ul className="skills-layout">
                    {skillsList.map((item) => {
                        return (
                            <li key={item.id} className="skills-list">
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="relative size-[300px]">
                <div className="relative z-10 w-full align-middle block rounded bg-green shadow-navy ease-slow-transition hover:outline-none hover:-translate-y-1 hover:-translate-x-1 hover:shadow-navy after:absolute after:-z-10 after:left-4 after:top-4 after:size-full after:rounded after:bg-transparent after:border-green after:border-2 after:hover:translate-y-1 after:hover:translate-x-1 after:mix-blend-screen">
                    <div className="relative size-full rounded grayscale contrast-100 mix-blend-multiply ease-slow-transition">
                        <img src={Main} alt="main" aria-hidden="true" className="relative rounded aspect-auto object-cover object-center"/>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default About