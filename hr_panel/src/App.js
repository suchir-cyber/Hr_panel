import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import Bookmarks from './pages/Bookmarks';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/:id" element={<UserDetails />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
}

export default App;
