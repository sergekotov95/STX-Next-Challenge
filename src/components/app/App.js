import FilmsList from '../FilmsList/FilmsList';
import HeaderComponent from '../Header/Header';
import MyFilms from '../MyFilms/MyFilms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.css';

function App() {

  return (
    <>
      <Router>
        <HeaderComponent/>
        <Routes>
          <Route exact path='/' element={<FilmsList/>}>
          </Route>
          <Route exact path='/myFilms' element={<MyFilms/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;