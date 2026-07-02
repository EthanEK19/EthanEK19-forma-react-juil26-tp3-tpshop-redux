import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Navigation from "./Router";
import Cart from './components/Cart';
import Produit from './components/Product';

function App() {

  return (

    <BrowserRouter>
      <div className="App">

        <h1 className='tour'> Mobile Shopping ! </h1>

        <Navigation/>

        <Routes>
          <Route index element={<Produit/>} />
          <Route path="cart" element={<Cart/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
