import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Details from './pages/Details';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/details/:pokemon' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}
