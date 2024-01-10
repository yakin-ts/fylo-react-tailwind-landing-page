import Features from './components/Features'
import Footer from './components/Footer'
import FormEmail from './components/FormEmail'
import Header from './components/Header'
import Intro from './components/Intro'
import Quotes from './components/Quotes'
import StayProductive from './components/StayProductive'
import './App.css'

function App() {

  return (
    <div className='flex flex-col m-0 p-0 w-full h-screen box-border'>
      <Header />
      <Intro />
      <Features />
      <StayProductive />
      <Quotes />
      <FormEmail />
      <Footer />
    </div>

  )
}

export default App
