import { memo } from 'react';
import { IconType } from 'react-icons';
import { socialLinks } from 'constants/data'

const Footer = () => {
  return (
    <footer className='block md:hidden max-w-72 text-light-slate mb-2.5 mx-auto'>
        <ul className='flex items-center justify-between list-none'>
            {socialLinks.map((item) => {
                const Icon:IconType = item.icon;
                return(
                    <li key={item.id} className='size-11'>
                        <a href={item.link} target='_blank' aria-label={item.title}
                        className='size-5 fill-none p-2.5 transition-all hover:text-green' rel='noopener norefferer'>
                            <Icon />
                        </a>
                    </li>            
                    )
                })}
        </ul>
    </footer>
  )
}

export default memo(Footer);