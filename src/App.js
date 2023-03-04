import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Words from './pages/words';
import Loading from './pages/loading';
import Pacman from "./pages/pacman";
import './App.scss';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Words</Link>
            </li>
            <li>
              <Link to="/about">Loading</Link>
            </li>
            <li>
              <Link to="/pacman">Pacman</Link>
            </li>
          </ul>
          <Routes>
              <Route exact path='/' element={< Words />}></Route>
              <Route exact path='/about' element={< Loading />}></Route>
              <Route exact path='/pacman' element={< Pacman />}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  )
}
