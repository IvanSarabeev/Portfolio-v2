import Button from "components/HTML/Button";

const Home = () => {
  return (
    <section className="section-layout">
      <h1 className="custom-text font-monts text-green font-normal ml-1 mb-8">
        Hi, my name is
      </h1>
      <h2 className="big-headings font-semibold m-0 text-lightest-slate leading-5">
        Ivan Sarabeev.
      </h2>
      <h3 className="big-headings text-slate font-semibold mt-2 whitespace-normal leading-snug">
        I build things for the web.
      </h3>
      <p className="max-w-2xl mt-5">
        I'm currently studying at UE-Varna for Master's Degree (and occasionally
        building & designing) exceptional digital experiences. Currently, I'm
        focused on building accessible & performance apps with
        <strong className="text-green ease-slow-transition"> React</strong>
      </p>
      <a
        href="https://github.com/IvanSarabeev"
        target="_blank"
        className="email-btn"
        rel="noreferrer"
        title="github referrence"
      >
        <Button type="button" aria-label="profile-link">
          Check out my GitHub!
        </Button>
      </a>
    </section>
  );
};

export default Home;
