import Layout from 'components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'

const App = () => {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Experience />
      </Layout>
    </>
  )
}

export default App
