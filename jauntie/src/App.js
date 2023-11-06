import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/template/Layout";
import TourismE from "./components/page/TourismE"
import TourismI from "./components/page/TourismI"
import Account from "./components/page/Account"
import Gallery from "./components/page/Gallery"
import About from "./components/page/About"
import IndexPage from './components/page';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path='tourisme' element={<TourismE/>}/>
            <Route path='tourismi' element={<TourismI/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path='gallery' element={<Gallery/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
