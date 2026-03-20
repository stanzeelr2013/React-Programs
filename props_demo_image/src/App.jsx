import './App.css'
import Usercard from './Usercard'
import Me from './assets/Me.jpg';
import Hijaz from './assets/Hijaz.jpg';

function App() {

  return (
    <>
      <div>
        <h1>User card Application </h1>
        <Usercard 
        name="Syed Tanzeel"
        image={Me}
        description="Faculty of Computer Science"
        />
        <Usercard name="Ali Khan" 
        image={Hijaz}
        description="Software Developer"
        />
      </div>
    </>
  )
}

export default App
