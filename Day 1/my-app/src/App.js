import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/02-03/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/counter' element={<Counter />} />
        
      </Routes>
    </div>
  );
}

export default App;
