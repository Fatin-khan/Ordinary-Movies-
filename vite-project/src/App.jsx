import './css/App.css'
import Favourites from './pages/Favourites.jsx';
import Home from './pages/Home.jsx';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favourites' element={<Favourites/>} />
        </Routes>
        </main>
   </div>
  );
}

export default App;
