import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageHome from './Pages/PageHome';
import Contact from './Components/Contact';
import Search from './Components/Search';
import PageNotification from './Pages/PageNotification';
import Footer from './Components/Footer';
import Menu from './Components/Menu'
import PageSignup from './Pages/PageSignup';
import PageOrder from './Pages/PageOrder';
import PageInformation from './Pages/PageInformation';
import PageHistory from './Pages/PageHistory';
import PageAdmin from './Pages/PageAdmin';

function App() {
  return (
    <BrowserRouter>
      <div className="app" >
      <Contact/>
      <Search/>
      <Menu/>
        <Routes>
          <Route path="/" element={<PageHome/>} />
          <Route path="/notification" element={<PageNotification/>}/>
          <Route path="/signup" element={<PageSignup/>} />
          <Route path="/admin" element={<PageAdmin/>} />
          <Route path="/order" element={<PageOrder/>} />
          <Route path="/information" element={<PageInformation/>} />
          <Route path="/history" element={<PageHistory/>} />
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
