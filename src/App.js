
import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Header } from './pages/header';
import { Todo } from './components/todo';


function App() {
  return (
    <div className="container">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todo" element={<Todo />} />


        </Routes>
      </BrowserRouter>


      {/* <Footer /> */}

    </div>)
}

export default App;
