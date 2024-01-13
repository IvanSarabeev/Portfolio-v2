import Button from 'components/HTML/Button'
import ResumeFile from "assets/files/Ivan-Mihaylov-Sarabeev-Resume.pdf"
import { headerLinks } from 'constants/data'

const Mobile = () => {

    const downloadResume = () => {
        window.open(ResumeFile);
    }

  return (
    <aside className='mobile-menu' aria-hidden="false">
        <nav className='mobile-nav'>
            <ol className='w-full flex flex-col items-center justify-between text-center'>
                {headerLinks.map((item) => {
                    return (
                    <li key={item.id} className='flex flex-col items-center mx-auto mt-0 mb-5'>
                        <strong className='block mb-1 text-green regular-14'>{item.label}</strong>
                        <a href={item.link} className='inline-block relative p-2 hover:text-green'>{item.text}</a>
                    </li>
                    )
                })}
            </ol>
            <Button className='resume-mobile' onClick={downloadResume}>Resume</Button>
        </nav>
    </aside>
  )
}

export default Mobile