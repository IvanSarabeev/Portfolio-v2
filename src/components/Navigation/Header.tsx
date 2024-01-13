import { headerLinks } from 'constants/data'
import Button from 'components/HTML/Button'
import ResumeFile from 'assets/files/Ivan-Mihaylov-Sarabeev-Resume.pdf'
import Mobile from './Mobile'
import { useToggle } from "hooks/useToggle"
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"

const Header = () => {
  const [show, handleToggle] = useToggle();

  const downloadResume = () => {
    window.open(ResumeFile);
  } 

  return (
    <header className='w-full fixed top-0 z-10 h-24 flex items-center justify-between filter-none backdrop-filter pointer-events-auto bg-header-bg px-6 md:px-8 lg:px-10 xl:px-12'>
      <nav className='w-full relative z-20 flex items-center justify-between font-monts text-lightest-slate'>
        <div className=''>
            <a href="#">
                <img src='' alt='' className=''/>
            </a>
        </div>
        <div className="hidden md:flex items-center">
            <ol className='flex items-center justify-between list-none m-0 p-0'>
                {headerLinks.map((link) => {
                    return(
                        <li key={link.id} className='relative regular-14 my-0 mx-1'>
                            <a href={link.link} className=''>
                                <strong className='mr-1 text-green regular-12 text-right'>{link.label}</strong>
                                <p className='inline-block relative p-2 hover:text-green'>{link.text}</p>
                            </a>
                            <span className=' sr-only'>{link.text}</span>
                        </li>
                    )
                })}
            </ol>
            <div>
                <Button type='button' className='resume-btn' rel='noreferrer' onClick={downloadResume}>Resume</Button>
            </div>
        </div>
        <div className="block md:hidden">
            <Button onClick={() => handleToggle()} className='mobile-btn' type='button' aria-label='Menu'>
            {show ? 
                <RxCross2 height={30} width={24} className='ham-icon'/> 
                : <BiMenuAltRight height={30} width={24} className='ham-icon'/> 
            }
            </Button>
            {show ? <Mobile /> : null}
        </div>
      </nav>
    </header>
  )
}

export default Header
