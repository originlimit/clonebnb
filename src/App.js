import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
