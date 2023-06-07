import './App.css'
import { ClickHandler } from './components/ClickHandler'
import { Greet } from './components/Greet'
import { Message } from './components/Message'
import { ParentComponent } from './components/ParentComponent'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Kamran' heroName='Batman' />
      <Greet name='Safia' heroName='Superman' >
      <button>Superman</button>
      </Greet>
      <Greet name='Ayaan' heroName='Spiderman'> 
      <p>This is children prop</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      <ParentComponent />
    </div>
  )
}

export default App
