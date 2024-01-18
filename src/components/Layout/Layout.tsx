import { useEffect } from 'react';
import SideMail from 'components/Content/SideMail';
import SocialBar from 'components/Content/SocialBar';
import Footer from 'components/Footer/Footer';
import Header from 'components/Navigation/Header';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 250) {
        document.body.classList.add('content-visible');
      } else {
        document.body.classList.remove('content-visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <Header />
        <SocialBar />
        <SideMail />
        <main className='max-w-custom min-h-screen w-full my-0 mx-auto px-6 md:px-12 lg:px-24 xl:px-36'>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout