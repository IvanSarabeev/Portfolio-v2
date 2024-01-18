import { headerLinks } from 'constants/data'
import Button from 'components/HTML/Button'
import ResumeFile from 'assets/files/Ivan-Mihaylov-Sarabeev-Resume.pdf'
import Mobile from './Mobile'
import { memo } from 'react';
import { useToggle } from "hooks/useToggle"
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import ImgLogo from "assets/images/s-logo.png"

const Header = () => {
  const [show, handleToggle] = useToggle();

  const downloadResume = () => {
    window.open(ResumeFile);
  } 

  return (
    <header className='w-full fixed top-0 z-10 h-24 flex items-center justify-between filter-none backdrop-filter pointer-events-auto bg-header-bg px-6 md:px-8 lg:px-10 xl:px-12'>
      <nav className='w-full relative z-20 flex items-center justify-between font-monts text-lightest-slate'>
        <div className='relative z-10 w-fit h-fit ease-slow-transition'>
            <a href="#" aria-label='home' className='relative hover:outline-none hover:translate-y-1 hover:translate-x-1'>
                <img 
                src={ImgLogo} 
                alt='logo'
                decoding='async'
                loading='lazy'
                height={60}
                width={84}
                className='aspect-auto object-cover ease-slow-transition'/>
                <title>Logo</title>
                <div className='-z-10 absolute top-0 left-0 ease-slow-transition translate-y-1 translate-x-1'></div>
            </a>
        </div>
        <div className="hidden md:flex items-center">
            <ol className='flex items-center justify-between list-none m-0 p-0'>
                {headerLinks.map((link) => {
                    return(
                        <li key={link.id} className='relative regular-14 my-0 mx-2'>
                            <a href={link.link} className=''>
                                <strong className='text-green regular-12 text-right'>{link.label}</strong>
                                <p className='inline-block relative p-2 hover:text-green'>{link.text}</p>
                            </a>
                            <span className='sr-only'>{link.text}</span>
                        </li>
                    )
                })}
            </ol>
            <Button type='button' className='resume-btn' rel='noreferrer' onClick={downloadResume}>Resume</Button>
        </div>
        <div className="block md:hidden pr-2.5">
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

export default memo(Header);
