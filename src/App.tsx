import Layout from 'components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ExtendProjects from './pages/ExtendProjects'

const App = () => {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Experience />
        <Projects />
        <ExtendProjects />
      </Layout>
    </>
  )
}

export default App
