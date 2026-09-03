
import './App.css';
import Navibar from './components/Navibar';
import Maincont from './components/Maincont';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >

    


      <Routes>
        <Route path='/' element ={<Login> </Login>}></Route>
        <Route path='/Navibar' element={<Navibar></Navibar>}></Route>
        <Route path='/Maincount' element={<Maincont></Maincont>}></Route>
        <Route path='/Menu' element={<Menu></Menu>}></Route>
        <Route path='/Footer' element={<Footer></Footer>}></Route>
      </Routes>


    </div>
  );
}

export default App;
