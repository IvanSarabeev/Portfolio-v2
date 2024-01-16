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
    <section id="about" className="section-layout">
        <h2 className="numbered-headings">
            <span className="num-headings">01.</span> About Me
        </h2>
        <article className="gap-12 grid grid-cols-1 md:grid-cols-2">
            <div className="block text-pretty">
                <p className="mb-3.5">Hello, I'm Ivan Sarabeev, a passionate <strong className="text-green">  React Developer </strong> and Ice Hockey coach from Varna, Bulgaria.</p>
                <p className="mb-3.5">I'm enthusiastic about embarking on my <strong className="text-green">professional</strong> journey in web development and constatnly seeking new <strong className="text-green"> challenges and growth </strong> opportunities.</p>
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
            <div className="relative size-[70%] md:size-[300px] mx-auto md:mx-0">
                <div className="img-wrapper">
                    <div className="img-filter">
                        <img src={Main} alt="main" aria-hidden="true"
                        decoding="async" loading="lazy"
                        className="relative rounded aspect-auto object-cover object-center"/>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default About