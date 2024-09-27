
import './App.css'
import ConatactForm from "./component/contactform/ConatactForm"
import ContactHeader from './component/ContactHeader/ContactHeader'
import Navbar from './component/navbar/Navbar'

function App() {
  
  return (
    <div><Navbar/>
    <div className='main-container'>
    <ContactHeader/>
    <ConatactForm/>
    </div>
    
    </div>
  )
}

export default App
