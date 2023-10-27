import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Accueil';
import About from './components/APropos';
import Contact from './components/Contact';
import MyPorfolio from './components/Portfolio';

function App() {
  return (
    <>
    {/* implémentation des routes de notre application */}
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/portfolio' element={<MyPorfolio />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
