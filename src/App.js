import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper
        color="lightblue"
        maxWidth="400px"
        textAlign="center"
        margin="0 auto"
      >
        <h1>Hello from Wrapper</h1>
        <h2>Text inside of the Wrapper</h2>
        <button>Click ME!!!</button>
      </Wrapper>
      <Wrapper color="lightgreen" maxWidth="500px" margin="20px auto">
        <h1>Hello from Wrapper</h1>
        <h2>Text inside of the Wrapper</h2>
        <input type="text" placeholder="enter text" />
      </Wrapper>
    </div>
  )
}

export default App
