import Header from './components/header.js'
import Footer from './components/footer.js'
import Todo from './components/todo.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Todo />
      <Footer/>
    </div>
  );
}

export default App;
