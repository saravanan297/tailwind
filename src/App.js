
import './App.css';
import Navibar from './components/Navibar';
import Maincont from './components/Maincont';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Items from './components/params/Items';
import About from './components/params/About';
function App() {
  

  
  let coffeeData =
  {
    name : "tea",
    rate : 40,
    quentity : 250,
    place : "erode"

  }
  
  const name = (saran) =>{
    console.log("satravanan is good boy",saran)
  }
  

  const CoffeeData = [
    [
      {
        id: 1,
        name: "Cappuccino",
        category: "Hot Coffee",
        price: 120,
        description: "Rich espresso with steamed milk and creamy foam.",
        rating: 4.8,
        size: "Medium",
        image: "saranimg"
      },
      {
        id: 2,
        name: "Cafe Latte",
        category: "Hot Coffee",
        price: 140,
        description: "Smooth espresso blended with steamed milk.",
        rating: 4.7,
        size: "Large",
        image: "saranimg"
      },
      {
        id: 3,
        name: "Americano",
        category: "Hot Coffee",
        price: 100,
        description: "Classic espresso mixed with hot water.",
        rating: 4.5,
        size: "Medium",
        image: "saranimg"
      },
      {
        id: 4,
        name: "Mocha",
        category: "Hot Coffee",
        price: 160,
        description: "Chocolate flavored coffee with steamed milk.",
        rating: 4.9,
        size: "Large",
        image: "saranimg"
      },
      {
        id: 5,
        name: "Cold Coffee",
        category: "Cold Coffee",
        price: 150,
        description: "Refreshing chilled coffee with creamy milk.",
        rating: 4.6,
        size: "Large",
        image: "saranimg"

      }
    ],

    [
      {
        id: 6,
        name: "Cold Mocha",
        category: "Cold Coffee",
        price: 170,
        description: "Cold coffee blended with chocolate and ice.",
        rating: 4.8,
        size: "Large",
        image: "saranimg"
      },
      {
        id: 7,
        name: "Espresso",
        category: "Hot Coffee",
        price: 90,
        description: "Strong and rich concentrated coffee.",
        rating: 4.7,
        size: "Small",
        image: "saranimg"
      },
      {
        id: 8,
        name: "Caramel Macchiato",
        category: "Special Coffee",
        price: 180,
        description: "Espresso with steamed milk and caramel flavor.",
        rating: 4.9,
        size: "Large",
        image: "saranimg"
      },
      {
        id: 9,
        name: "Chocolate Milkshake",
        category: "Milkshake",
        price: 160,
        description: "Thick and creamy chocolate milkshake.",
        rating: 4.6,
        size: "Large",
        image: "saranimg"
      },
      {
        id: 10,
        name: "Vanilla Milkshake",
        category: "Milkshake",
        price: 150,
        description: "Sweet and creamy vanilla flavored milkshake.",
        rating: 4.5,
        size: "Large",
        image: "saranimg"
      }
    ]
  ];










  return (
    <div>


      <Routes>
        <Route path='/Login' element={<Login coffee={coffeeData}> </Login>}></Route>
        <Route path='/Navibar' element={<Navibar></Navibar>}></Route>
        <Route path='/Maincount' element={<Maincont coffee={coffeeData}></Maincont>}></Route>
        <Route path='/Menu' element={<Menu coin={CoffeeData}></Menu>}></Route>
        <Route path='/Footer' element={<Footer></Footer>}></Route>

        {/* params */}
        <Route path='/Itmes' element={<Items />} />
        <Route path='/Items/:btn' element={<About />} />


      </Routes>
    </div>
  );
}

export default App;
