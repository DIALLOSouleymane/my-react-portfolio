import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Accueil';
import About from './components/APropos';
import Contact from './components/Contact';
import MyPorfolio from './components/Portfolio';
import Dashboard from './components/addingNewProject';
import Activities from './components/Activities';

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
        {/* Cette route-ci nous permet de d'ajouter de nouveaux projets dans notre portfolio */}
        <Route path='/create' element={<Dashboard />} />
        <Route path='/activities' element={<Activities />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
