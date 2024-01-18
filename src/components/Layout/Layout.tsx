import Footer from 'components/Footer/Footer';
import Header from 'components/Navigation/Header';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
        <Header />
        <main className='max-w-custom min-h-screen w-full my-0 mx-auto px-6 md:px-12 lg:px-24 xl:px-36'>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout