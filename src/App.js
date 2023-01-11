import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LectureEcriture from './pages/lectureEcriture/LectureEcriture';
import Ecrit from './pages/ecrit/Ecrit';
import Journalisme from './pages/journalisme/Journalisme';
import Article from './pages/article/Article';
import Contact from './pages/contact/Contact';
import Inscription from './pages/inscription/Inscription';
import Admin from './pages/admin/Admin';
import NewArticles from './pages/new_articles/NewArticles';
import NewEcrits from './pages/new_ecrits/NewEcrits';
import Connected from './pages/connected/Connected';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Contact />}></Route>
        <Route exact path="/ecriture" element={<LectureEcriture />}></Route>
        <Route path="/ecriture/:link" element={<Ecrit />}></Route>
        <Route exact path="/journalisme" element={<Journalisme />}></Route>
        <Route path="/journalisme/:link" element={<Article />}></Route>
        <Route exact path="/inscription" element={<Inscription />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/connected" element={<Connected />}></Route>
        <Route exact path="/admin/new_articles" element={<NewArticles />}></Route>
        <Route exact path="/admin/new_ecrits" element={<NewEcrits />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
