import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import Project from './components/Project'
import { TimeLine } from './components/TimeLine'




function App() {
  
  return (
    <>
      <div className="App">
      <Navbar/>
      <Presentation/>
      <Project/>
      <TimeLine/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
