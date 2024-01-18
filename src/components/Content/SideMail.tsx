
const SideMail = () => {
  return (
    <div className="hidden md:block fixed z-10 right-5 lg:right-10 left-auto bottom-0 w-10 font-monts text-light-slate" aria-orientation="vertical">
        <div className="relative flex flex-col items-center after:block after:content-[''] after:w-0.5 after:h-[90px] after:my-0 after:mx-auto after:bg-light-slate">
            <a href="mailto:ivan.sarabeev99@gmail.com" aria-label="email"
            className="regular-12 tracking-widest my-5 mx-auto writing-mode transition-all hover:text-green hover:-translate-y-1">
                ivan.sarabeev99@gmail.com
            </a>
        </div>
    </div>
  )
}

export default SideMail